import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  LayoutDashboard, 
  FileText, 
  ImageIcon, 
  Newspaper, 
  LogOut, 
  ChevronRight,
  Plus,
  Trash2,
  Edit,
  X,
  Save,
  Loader2,
  Upload,
  Image as UIImage
} from "lucide-react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [press, setPress] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // New Item States
  const [newBlog, setNewBlog] = useState({ title: "", author: "", date: new Date().toISOString().split('T')[0], content: "", slug: "", image_url: "" });
  const [newPress, setNewPress] = useState({ title: "", date: new Date().toISOString().split('T')[0], image_url: "", content: "" });
  const [newGallery, setNewGallery] = useState({ title: "", image_url: "" });

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "blogs", label: "Manage Blogs", icon: FileText },
    { id: "press", label: "Press Releases", icon: Newspaper },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  // Helper to get auth headers
  const getAuthHeaders = () => {
    const token = sessionStorage.getItem("adminToken");
    return { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    // Auth Check
    if (!sessionStorage.getItem("isAdminLoggedIn") || !sessionStorage.getItem("adminToken")) {
      navigate("/admin", { replace: true });
      return;
    }
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const baseUrl = "http://localhost:5000/api";
      if (activeTab === "overview") {
        const [blogRes, pressRes, galleryRes] = await Promise.all([
          axios.get(`${baseUrl}/blogs`),
          axios.get(`${baseUrl}/press`),
          axios.get(`${baseUrl}/gallery`)
        ]);
        setBlogs(blogRes.data);
        setPress(pressRes.data);
        setGallery(galleryRes.data);
      } else if (activeTab === "blogs") {
        const res = await axios.get(`${baseUrl}/blogs`);
        setBlogs(res.data);
      } else if (activeTab === "press") {
        const res = await axios.get(`${baseUrl}/press`);
        setPress(res.data);
      } else if (activeTab === "gallery") {
        const res = await axios.get(`${baseUrl}/gallery`);
        setGallery(res.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      if (err.response?.status === 401 || err.response?.status === 403) {
          handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setNewBlog({ title: "", author: "", date: new Date().toISOString().split('T')[0], content: "", slug: "", image_url: "" });
    setNewPress({ title: "", date: new Date().toISOString().split('T')[0], image_url: "", content: "" });
    setNewGallery({ title: "", image_url: "" });
    setShowModal(false);
  };

  const handleImageUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            ...getAuthHeaders()
        }
      });
      
      const imageUrl = res.data.imageUrl;
      if (type === "blogs") setNewBlog(prev => ({ ...prev, image_url: imageUrl }));
      else if (type === "press") setNewPress(prev => ({ ...prev, image_url: imageUrl }));
      else if (type === "gallery") setNewGallery(prev => ({ ...prev, image_url: imageUrl }));
    } catch (err) {
      alert("Image upload failed: " + (err.response?.data?.message || err.message));
      if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (type) => {
    if (type === "blogs") setNewBlog({ ...newBlog, image_url: "" });
    else if (type === "press") setNewPress({ ...newPress, image_url: "" });
    else if (type === "gallery") setNewGallery({ ...newGallery, image_url: "" });
  };

  const handleEdit = (item, type) => {
    setEditingId(item.id);
    if (type === "blogs") {
      setNewBlog({ ...item, date: item.date ? new Date(item.date).toISOString().split('T')[0] : "" });
    } else if (type === "press") {
      setNewPress({ ...item, date: item.date ? new Date(item.date).toISOString().split('T')[0] : "" });
    } else if (type === "gallery") {
      setNewGallery({ ...item });
    }
    setShowModal(true);
  };

  const handleDelete = async (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/${type === 'press' ? 'press' : type}/${id}`, {
            headers: getAuthHeaders()
        });
        fetchData();
      } catch (err) {
        alert("Error deleting item: " + (err.response?.data?.message || err.message));
        if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseUrl = "http://localhost:5000/api";
      const headers = { headers: getAuthHeaders() };
      
      if (activeTab === "blogs") {
        const slug = newBlog.slug || newBlog.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const data = { ...newBlog, slug, tags: newBlog.tags || [] };
        if (editingId) {
          await axios.put(`${baseUrl}/blogs/${editingId}`, data, headers);
        } else {
          await axios.post(`${baseUrl}/blogs`, data, headers);
        }
      } else if (activeTab === "press") {
        if (editingId) {
          await axios.put(`${baseUrl}/press/${editingId}`, newPress, headers);
        } else {
          await axios.post(`${baseUrl}/press`, newPress, headers);
        }
      } else if (activeTab === "gallery") {
        if (editingId) {
          await axios.put(`${baseUrl}/gallery/${editingId}`, newGallery, headers);
        } else {
          await axios.post(`${baseUrl}/gallery`, newGallery, headers);
        }
      }
      resetForm();
      fetchData();
    } catch (err) {
      console.error("Submit error:", err);
      alert(`Error saving item: ${err.response?.data?.message || err.message}`);
      if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminLoggedIn");
    sessionStorage.removeItem("adminToken");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="admin-dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header"><h2>Nivara Admin</h2></div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button key={item.id} className={`dash-nav-item ${activeTab === item.id ? "active" : ""}`} onClick={() => setActiveTab(item.id)}>
              <item.icon size={20} /><span>{item.label}</span>
              {activeTab === item.id && <ChevronRight size={16} className="active-chevron" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} /><span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="dashboard-content">
        <header className="content-header">
          <h1>{menuItems.find(i => i.id === activeTab)?.label}</h1>
          {activeTab !== "overview" && (
            <button className="add-new-btn" onClick={() => { setEditingId(null); setShowModal(true); }}>
              <Plus size={20} /><span>Add New</span>
            </button>
          )}
        </header>

        <section className="content-body">
          {loading ? (
            <div className="loader-container"><Loader2 className="spin" size={40} /></div>
          ) : (
            <div className="data-table-container">
              {activeTab === "blogs" && (
                <table className="data-table">
                  <thead><tr><th>Title</th><th>Date</th><th>Author</th><th>Actions</th></tr></thead>
                  <tbody>
                    {blogs.map(b => (
                      <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{new Date(b.date).toLocaleDateString()}</td>
                        <td>{b.author}</td>
                        <td className="actions">
                          <button className="edit-btn" onClick={() => handleEdit(b, 'blogs')}><Edit size={16} /></button>
                          <button className="delete-btn" onClick={() => handleDelete(b.id, 'blogs')}><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "press" && (
                <table className="data-table">
                  <thead><tr><th>Image</th><th>Title</th><th>Date</th><th>Link</th><th>Actions</th></tr></thead>
                  <tbody>
                    {press.map(p => (
                      <tr key={p.id}>
                        <td>{p.image_url ? <img src={p.image_url} alt="" style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }} /> : <div className="no-img-placeholder">No Img</div>}</td>
                        <td>{p.title}</td>
                        <td>{new Date(p.date).toLocaleDateString()}</td>
                        <td><a href={p.link} target="_blank" rel="noreferrer">View Link</a></td>
                        <td className="actions">
                          <button className="edit-btn" onClick={() => handleEdit(p, 'press')}><Edit size={16} /></button>
                          <button className="delete-btn" onClick={() => handleDelete(p.id, 'press')}><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "gallery" && (
                <table className="data-table">
                  <thead><tr><th>Image</th><th>Title</th><th>Actions</th></tr></thead>
                  <tbody>
                    {gallery.map(g => (
                      <tr key={g.id}>
                        <td><img src={g.image_url} alt="" style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }} /></td>
                        <td>{g.title}</td>
                        <td className="actions">
                          <button className="edit-btn" onClick={() => handleEdit(g, 'gallery')}><Edit size={16} /></button>
                          <button className="delete-btn" onClick={() => handleDelete(g.id, 'gallery')}><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "overview" && (
                <div className="overview-stats">
                  <div className="stat-card">
                    <FileText size={24} /><h3>Blogs: {blogs.length}</h3>
                  </div>
                  <div className="stat-card">
                    <Newspaper size={24} /><h3>Press: {press.length}</h3>
                  </div>
                  <div className="stat-card">
                    <ImageIcon size={24} /><h3>Gallery: {gallery.length}</h3>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>{editingId ? "Edit" : "Add New"} Item</h2>
              <button className="close-btn" onClick={resetForm}><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-scroll-area">
                {activeTab === "blogs" && (
                  <>
                    <div className="form-group"><label>Blog Title</label><input type="text" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} required /></div>
                    <div className="form-row">
                      <div className="form-group"><label>Author</label><input type="text" value={newBlog.author} onChange={e => setNewBlog({...newBlog, author: e.target.value})} required /></div>
                      <div className="form-group"><label>Published Date</label><input type="date" value={newBlog.date} onChange={e => setNewBlog({...newBlog, date: e.target.value})} /></div>
                    </div>
                    
                    <div className="form-group">
                      <label>Cover Image</label>
                      <div className="image-upload-wrapper">
                        {newBlog.image_url ? (
                          <div className="image-preview-container">
                            <img src={newBlog.image_url} alt="Preview" className="image-preview" />
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('blogs')}><X size={16} /></button>
                          </div>
                        ) : (
                          <label className="upload-dropzone">
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'blogs')} hidden />
                            <Upload size={20} />
                            <span>Upload Blog Cover</span>
                          </label>
                        )}
                        <div className="or-divider"><span>OR URL</span></div>
                        <input type="text" className="small-input" placeholder="https://example.com/image.jpg" value={newBlog.image_url} onChange={e => setNewBlog({...newBlog, image_url: e.target.value})} />
                      </div>
                    </div>

                    <div className="form-group"><label>Content Snapshot</label><textarea rows="3" value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} required placeholder="Write a short summary..."></textarea></div>
                  </>
                )}
                {activeTab === "press" && (
                  <>
                    <div className="form-group"><label>Press Release Title</label><input type="text" value={newPress.title} onChange={e => setNewPress({...newPress, title: e.target.value})} required /></div>
                    <div className="form-group"><label>Published Date</label><input type="date" value={newPress.date} onChange={e => setNewPress({...newPress, date: e.target.value})} /></div>
                    
                    <div className="form-group">
                      <label>Thumbnail Image</label>
                      <div className="image-upload-wrapper">
                        {newPress.image_url ? (
                          <div className="image-preview-container">
                            <img src={newPress.image_url} alt="Preview" className="image-preview" />
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('press')}><X size={16} /></button>
                          </div>
                        ) : (
                          <div className="compact-upload-row">
                            <label className="upload-dropzone">
                              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'press')} hidden />
                              <Upload size={18} /><span>Upload</span>
                            </label>
                            <input type="text" className="small-input" placeholder="Paste image URL..." value={newPress.image_url} onChange={e => setNewPress({...newPress, image_url: e.target.value})} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group"><label>Description</label><textarea rows="2" value={newPress.content} onChange={e => setNewPress({...newPress, content: e.target.value})} placeholder="Small snippet for the card..."></textarea></div>
                  </>
                )}
                {activeTab === "gallery" && (
                  <>
                    <div className="form-group"><label>Event Name</label><input type="text" value={newGallery.title} onChange={e => setNewGallery({...newGallery, title: e.target.value})} required /></div>
                    
                    <div className="form-group">
                      <label>Photo</label>
                      <div className="image-upload-wrapper">
                        {newGallery.image_url ? (
                          <div className="image-preview-container">
                            <img src={newGallery.image_url} alt="Preview" className="image-preview" />
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('gallery')}><X size={16} /></button>
                          </div>
                        ) : (
                          <div className="compact-upload-row">
                            <label className="upload-dropzone">
                              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'gallery')} hidden />
                              <Upload size={18} /><span>Upload Photo</span>
                            </label>
                            <input type="text" className="small-input" placeholder="Paste image URL..." value={newGallery.image_url} onChange={e => setNewGallery({...newGallery, image_url: e.target.value})} required />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="submit" className="save-btn">{editingId ? "Update" : "Add Now"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
