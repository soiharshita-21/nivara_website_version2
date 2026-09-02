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
  Image as UIImage,
  Layers,
  Code,
  Folder,
  FolderOpen,
  MapPin,
  Bell,
  FileUp,
  Copy,
  Check,
  ExternalLink,
  File
} from "lucide-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./AdminDashboard.css";

const documentCategories = [
  { id: "sarfaesi", label: "Public Disclosure: SARFAESI Attachments", target: "/customercenter/publicdisclosure" },
  { id: "public_disclosure", label: "Public Disclosure: Quarterly Disclosures", target: "/customercenter/publicdisclosure" },
  { id: "auction", label: "Auction Properties: Sale Cum Auction Notices", target: "/customercenter/auctionproperties" },
  { id: "investor_reports", label: "Investor Relations: Annual Returns", target: "/investorsrelation/annual-returns" },
  { id: "investor_notices", label: "Investor Relations: AGM / EGM Notices", target: "/investorsrelation/notices" },
  { id: "investor_transcripts", label: "Investor Relations: Transcripts", target: "/investorsrelation/transcripts" },
  { id: "policies", label: "Company Policies", target: "/aboutus/policy" },
  { id: "general", label: "General / Custom (Copy link to use anywhere)", target: "Anywhere" }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [press, setPress] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [pages, setPages] = useState([]);
  const [branches, setBranches] = useState([]);
  const [popups, setPopups] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedStateFilter, setSelectedStateFilter] = useState("All");
  const [selectedDocCategoryFilter, setSelectedDocCategoryFilter] = useState("All");
  const [copiedDocId, setCopiedDocId] = useState(null);
  const [docFile, setDocFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Gallery Folders States
  const [activeFolder, setActiveFolder] = useState(null);
  const [editingFolder, setEditingFolder] = useState(null);
  const [uploadingMultiple, setUploadingMultiple] = useState(false);

  // New Item States
  const [newBlog, setNewBlog] = useState({ title: "", author: "", date: new Date().toISOString().split('T')[0], content: "", slug: "", image_url: "" });
  const [newPress, setNewPress] = useState({ title: "", date: new Date().toISOString().split('T')[0], image_url: "", content: "" });
  const [newGallery, setNewGallery] = useState({ title: "", folder_date: "", image_url: "", image_urls: [] });
  const [newPage, setNewPage] = useState({ title: "", slug: "", content: "", menu_location: "none", banner_image: "" });
  const [newBranch, setNewBranch] = useState({ city: "", state: "Karnataka", opened: new Date().toISOString().split('T')[0], address: "", contact: "1800-309-1516", is_new: false });
  const [newPopup, setNewPopup] = useState({
    title: "",
    message: "",
    image_url: "",
    link_url: "",
    link_text: "Learn More",
    start_date: new Date().toISOString().split('T')[0],
    end_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    is_active: true
  });
  const [newDocument, setNewDocument] = useState({
    title: "",
    category: "sarfaesi",
    publish_date: new Date().toISOString().split('T')[0],
    is_active: true,
    extra_info: ""
  });

  const [isHtmlMode, setIsHtmlMode] = useState(false);

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      ['clean']
    ],
  };

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "pages", label: "Page Builder", icon: Layers },
    { id: "blogs", label: "Manage Blogs", icon: FileText },
    { id: "press", label: "Press Releases", icon: Newspaper },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "branches", label: "Manage Branches", icon: MapPin },
    { id: "popups", label: "Pop-Ups", icon: Bell },
    { id: "documents", label: "Documents / PDFs", icon: FileUp }
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
      const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;
      if (activeTab === "overview") {
        const [blogRes, pressRes, galleryRes, pagesRes, branchRes, popupRes, docRes] = await Promise.all([
          axios.get(`${baseUrl}/blogs`),
          axios.get(`${baseUrl}/press`),
          axios.get(`${baseUrl}/gallery`),
          axios.get(`${baseUrl}/pages`),
          axios.get(`${baseUrl}/branches`),
          axios.get(`${baseUrl}/popups`, { headers: getAuthHeaders() }),
          axios.get(`${baseUrl}/documents?include_inactive=true`)
        ]);
        setBlogs(blogRes.data);
        setPress(pressRes.data);
        setGallery(galleryRes.data);
        setPages(pagesRes.data);
        setBranches(branchRes.data);
        setPopups(popupRes.data);
        setDocuments(docRes.data);
      } else if (activeTab === "blogs") {
        const res = await axios.get(`${baseUrl}/blogs`);
        setBlogs(res.data);
      } else if (activeTab === "press") {
        const res = await axios.get(`${baseUrl}/press`);
        setPress(res.data);
      } else if (activeTab === "gallery") {
        const res = await axios.get(`${baseUrl}/gallery`);
        setGallery(res.data);
      } else if (activeTab === "pages") {
        const res = await axios.get(`${baseUrl}/pages`);
        setPages(res.data);
      } else if (activeTab === "branches") {
        const res = await axios.get(`${baseUrl}/branches`);
        setBranches(res.data);
      } else if (activeTab === "popups") {
        const res = await axios.get(`${baseUrl}/popups`, { headers: getAuthHeaders() });
        setPopups(res.data);
      } else if (activeTab === "documents") {
        const res = await axios.get(`${baseUrl}/documents?include_inactive=true`);
        setDocuments(res.data);
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

  const getFilteredBranches = () => {
    if (selectedStateFilter === "All") return branches;
    return branches.filter(b => b.state && b.state.toLowerCase() === selectedStateFilter.toLowerCase());
  };

  const getFilteredDocuments = () => {
    if (selectedDocCategoryFilter === "All") return documents;
    return documents.filter(d => (d.category || "").toLowerCase() === selectedDocCategoryFilter.toLowerCase());
  };

  const resetForm = () => {
    setEditingId(null);
    setEditingFolder(null);
    setNewBlog({ title: "", author: "", date: new Date().toISOString().split('T')[0], content: "", slug: "", image_url: "" });
    setNewPress({ title: "", date: new Date().toISOString().split('T')[0], image_url: "", content: "" });
    setNewGallery({ title: "", folder_date: "", image_url: "", image_urls: [] });
    setNewPage({ title: "", slug: "", content: "", menu_location: "none", banner_image: "" });
    setNewBranch({ city: "", state: "Karnataka", opened: new Date().toISOString().split('T')[0], address: "", contact: "1800-309-1516", is_new: false });
    setNewPopup({
      title: "",
      message: "",
      image_url: "",
      link_url: "",
      link_text: "Learn More",
      start_date: new Date().toISOString().split('T')[0],
      end_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      is_active: true
    });
    setNewDocument({
      title: "",
      category: "sarfaesi",
      publish_date: new Date().toISOString().split('T')[0],
      is_active: true,
      extra_info: ""
    });
    setDocFile(null);

    setIsHtmlMode(false);
    setShowModal(false);
  };

  const handleImageUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...getAuthHeaders()
        }
      });

      const imageUrl = res.data.imageUrl;
      if (type === "blogs") setNewBlog(prev => ({ ...prev, image_url: imageUrl }));
      else if (type === "press") setNewPress(prev => ({ ...prev, image_url: imageUrl }));
      else if (type === "gallery") setNewGallery(prev => ({ ...prev, image_url: imageUrl }));
      else if (type === "pages") setNewPage(prev => ({ ...prev, banner_image: imageUrl }));
      else if (type === "popups") setNewPopup(prev => ({ ...prev, image_url: imageUrl }));
    } catch (err) {
      alert("Image upload failed: " + (err.response?.data?.message || err.message));
      if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleMultipleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file);
    });

    try {
      setUploadingMultiple(true);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/upload-multiple`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...getAuthHeaders()
        }
      });

      const urls = res.data.imageUrls;
      if (editingFolder) {
        setEditingFolder(prev => ({
          ...prev,
          image_urls: [...(prev.image_urls || []), ...urls]
        }));
      } else {
        setNewGallery(prev => ({
          ...prev,
          image_urls: [...(prev.image_urls || []), ...urls]
        }));
      }
    } catch (err) {
      alert("Multiple images upload failed: " + (err.response?.data?.message || err.message));
      if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
    } finally {
      setUploadingMultiple(false);
    }
  };

  const removeImage = (type) => {
    if (type === "blogs") setNewBlog({ ...newBlog, image_url: "" });
    else if (type === "press") setNewPress({ ...newPress, image_url: "" });
    else if (type === "gallery") setNewGallery({ ...newGallery, image_url: "" });
    else if (type === "pages") setNewPage({ ...newPage, banner_image: "" });
    else if (type === "popups") setNewPopup({ ...newPopup, image_url: "" });
  };

  const removeMultipleImage = (indexToRemove) => {
    if (editingFolder) {
      setEditingFolder(prev => ({
        ...prev,
        image_urls: prev.image_urls.filter((_, index) => index !== indexToRemove)
      }));
    } else {
      setNewGallery(prev => ({
        ...prev,
        image_urls: prev.image_urls.filter((_, index) => index !== indexToRemove)
      }));
    }
  };

  const handleEdit = (item, type) => {
    setEditingId(item.id);
    if (type === "blogs") {
      setNewBlog({ ...item, date: item.date ? new Date(item.date).toISOString().split('T')[0] : "" });
    } else if (type === "press") {
      setNewPress({ ...item, date: item.date ? new Date(item.date).toISOString().split('T')[0] : "" });
    } else if (type === "gallery") {
      setNewGallery({ ...item });
    } else if (type === "pages") {
      setNewPage({ ...item });
    } else if (type === "branches") {
      setNewBranch({
        city: item.city,
        state: item.state,
        opened: item.opened ? new Date(item.opened).toISOString().split('T')[0] : "",
        address: item.address,
        contact: item.contact,
        is_new: !!item.is_new
      });
    } else if (type === "popups") {
      setNewPopup({
        title: item.title || "",
        message: item.message || "",
        image_url: item.image_url || "",
        link_url: item.link_url || "",
        link_text: item.link_text || "Learn More",
        start_date: item.start_date ? new Date(item.start_date).toISOString().split('T')[0] : "",
        end_date: item.end_date ? new Date(item.end_date).toISOString().split('T')[0] : "",
        is_active: !!item.is_active
      });
    } else if (type === "documents") {
      setNewDocument({
        title: item.title || "",
        category: item.category || "sarfaesi",
        publish_date: item.publish_date || new Date().toISOString().split('T')[0],
        is_active: item.is_active === 1 || item.is_active === true,
        extra_info: item.extra_info ? (typeof item.extra_info === 'object' ? JSON.stringify(item.extra_info) : item.extra_info) : ""
      });
      setDocFile(null);
    }
    setShowModal(true);
  };

  const handleEditFolder = (folder) => {
    setEditingFolder({
      old_title: folder.title,
      title: folder.title,
      folder_date: folder.subtitle,
      image_urls: []
    });
    setShowModal(true);
  };

  const handleDelete = async (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/${type === 'press' ? 'press' : type}/${id}`, {
          headers: getAuthHeaders()
        });
        if (type === 'branches') {
          localStorage.setItem("nivara_branch_update_timestamp", Date.now().toString());
          window.dispatchEvent(new CustomEvent("branchesUpdated"));
        } else if (type === 'documents') {
          localStorage.setItem("nivara_document_update_timestamp", Date.now().toString());
          window.dispatchEvent(new CustomEvent("documentsUpdated"));
        }
        fetchData();
      } catch (err) {
        alert("Error deleting item: " + (err.response?.data?.message || err.message));
        if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
      }
    }
  };

  const handleDeleteFolder = async (category) => {
    if (window.confirm(`Are you sure you want to delete the folder "${category}" and all its photos?`)) {
      try {
        setLoading(true);
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/gallery/folder/${encodeURIComponent(category)}`, {
          headers: getAuthHeaders()
        });
        if (activeFolder === category) {
          setActiveFolder(null);
        }
        fetchData();
      } catch (err) {
        alert("Error deleting folder: " + (err.response?.data?.message || err.message));
        if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;
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
        if (editingFolder) {
          await axios.put(`${baseUrl}/gallery/folder`, {
            old_title: editingFolder.old_title,
            new_title: editingFolder.title,
            new_folder_date: editingFolder.folder_date
          }, headers);

          if (editingFolder.image_urls && editingFolder.image_urls.length > 0) {
            await axios.post(`${baseUrl}/gallery`, {
              title: editingFolder.title,
              folder_date: editingFolder.folder_date,
              image_urls: editingFolder.image_urls
            }, headers);
          }
        } else {
          await axios.post(`${baseUrl}/gallery`, {
            title: newGallery.title,
            folder_date: newGallery.folder_date,
            image_urls: newGallery.image_urls
          }, headers);
        }

      } else if (activeTab === "pages") {
        const slug = newPage.slug || newPage.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        const data = { ...newPage, slug };
        if (editingId) {
          await axios.put(`${baseUrl}/pages/${editingId}`, data, headers);
        } else {
          await axios.post(`${baseUrl}/pages`, data, headers);
        }
      } else if (activeTab === "branches") {
        if (editingId) {
          await axios.put(`${baseUrl}/branches/${editingId}`, newBranch, headers);
        } else {
          await axios.post(`${baseUrl}/branches`, newBranch, headers);
        }
        localStorage.setItem("nivara_branch_update_timestamp", Date.now().toString());
        window.dispatchEvent(new CustomEvent("branchesUpdated"));
      } else if (activeTab === "popups") {
        if (editingId) {
          await axios.put(`${baseUrl}/popups/${editingId}`, newPopup, headers);
        } else {
          await axios.post(`${baseUrl}/popups`, newPopup, headers);
        }
      } else if (activeTab === "documents") {
        const formData = new FormData();
        formData.append("title", newDocument.title);
        formData.append("category", newDocument.category);
        formData.append("publish_date", newDocument.publish_date);
        formData.append("is_active", newDocument.is_active ? 1 : 0);
        if (newDocument.extra_info) {
          formData.append("extra_info", newDocument.extra_info);
        }
        if (docFile) {
          formData.append("file", docFile);
        }

        if (editingId) {
          await axios.put(`${baseUrl}/documents/${editingId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              ...getAuthHeaders()
            }
          });
        } else {
          if (!docFile) {
            alert("Please select a PDF file to upload.");
            setLoading(false);
            return;
          }
          await axios.post(`${baseUrl}/documents`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              ...getAuthHeaders()
            }
          });
        }
        localStorage.setItem("nivara_document_update_timestamp", Date.now().toString());
        window.dispatchEvent(new CustomEvent("documentsUpdated"));
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

  const handleToggleDocument = async (id, currentStatus) => {
    try {
      setLoading(true);
      const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;
      await axios.put(`${baseUrl}/documents/${id}`, { is_active: !currentStatus }, {
        headers: getAuthHeaders()
      });
      localStorage.setItem("nivara_document_update_timestamp", Date.now().toString());
      window.dispatchEvent(new CustomEvent("documentsUpdated"));
      fetchData();
    } catch (err) {
      alert("Error updating document status: " + (err.response?.data?.message || err.message));
      if (err.response?.status === 401 || err.response?.status === 403) handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleCopyDocLink = (doc) => {
    const fullUrl = doc.full_url || `${window.location.origin}${doc.file_url}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedDocId(doc.id);
      setTimeout(() => setCopiedDocId(null), 2500);
    }).catch(err => {
      console.error("Failed to copy link:", err);
      prompt("Copy document link:", fullUrl);
    });
  };

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return "0 KB";
    if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + " KB";
    }
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleTogglePopup = async (id) => {
    try {
      setLoading(true);
      await axios.patch(`${import.meta.env.VITE_API_BASE_URL}/api/popups/${id}/toggle`, {}, {
        headers: getAuthHeaders()
      });
      fetchData();
    } catch (err) {
      alert("Error toggling popup status: " + (err.response?.data?.message || err.message));
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
              {activeTab === "pages" && (
                <table className="data-table">
                  <thead><tr><th>Title</th><th>Slug</th><th>Menu Location</th><th>Actions</th></tr></thead>
                  <tbody>
                    {pages.map(p => (
                      <tr key={p.id}>
                        <td>{p.title}</td>
                        <td>/{p.slug}</td>
                        <td>{p.menu_location}</td>
                        <td className="actions">
                          <button className="edit-btn" onClick={() => handleEdit(p, 'pages')}><Edit size={16} /></button>
                          <button className="delete-btn" onClick={() => handleDelete(p.id, 'pages')}><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "branches" && (
                <>
                  <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '15px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: '600', color: "#211F1F", fontSize: '1rem' }}>Filter by State:</span>
                      <select 
                        value={selectedStateFilter} 
                        onChange={(e) => setSelectedStateFilter(e.target.value)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          outline: 'none',
                          fontWeight: '600',
                          color: '#1e293b',
                          backgroundColor: '#fff',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="All">All States</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                      </select>
                    </div>
                    <div style={{ color: "#211F1F", fontSize: '1rem', fontWeight: '500' }}>
                      Showing <strong>{getFilteredBranches().length}</strong> of <strong>{branches.length}</strong> branches
                    </div>
                  </div>

                  <table className="data-table">
                    <thead><tr><th>City</th><th>State</th><th>Opened Date</th><th>Contact</th><th>Newly Opened?</th><th>Actions</th></tr></thead>
                    <tbody>
                      {getFilteredBranches().map(b => (
                        <tr key={b.id}>
                          <td style={{ fontWeight: '600' }}>{b.city}</td>
                          <td>{b.state}</td>
                          <td>{b.opened ? new Date(b.opened).toLocaleDateString() : ""}</td>
                          <td>{b.contact}</td>
                          <td>
                            <span className={`status-pill ${b.is_new ? 'status-active' : 'status-draft'}`} style={{
                              padding: '4px 8px',
                              borderRadius: '12px',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              backgroundColor: b.is_new ? '#ecfdf5' : '#f3f4f6',
                              color: b.is_new ? '#059669' : '#6b7280'
                            }}>
                              {b.is_new ? "Yes" : "No"}
                            </span>
                          </td>
                          <td className="actions">
                            <button className="edit-btn" onClick={() => handleEdit(b, 'branches')}><Edit size={16} /></button>
                            <button className="delete-btn" onClick={() => handleDelete(b.id, 'branches')}><Trash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                      {getFilteredBranches().length === 0 && (
                        <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: "#211F1F" }}>No branches found matching the filter.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </>
              )}

              {activeTab === "popups" && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Message</th>
                      <th>Duration</th>
                      <th>Active Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popups.map(p => (
                      <tr key={p.id}>
                        <td>
                          {p.image_url ? (
                            <img src={p.image_url} alt="" style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }} />
                          ) : (
                            <div className="no-img-placeholder" style={{ width: 50, height: 50, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', color: '#94a3b8', fontSize: '0.8rem' }}>No Img</div>
                          )}
                        </td>
                        <td style={{ fontWeight: '600' }}>{p.title}</td>
                        <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {p.message}
                        </td>
                        <td style={{ fontSize: '0.9rem' }}>
                          <div><strong>Start:</strong> {p.start_date ? new Date(p.start_date).toLocaleDateString() : ""}</div>
                          <div><strong>End:</strong> {p.end_date ? new Date(p.end_date).toLocaleDateString() : ""}</div>
                        </td>
                        <td>
                          <button 
                            onClick={() => handleTogglePopup(p.id)}
                            className={`status-pill ${p.is_active ? 'status-active' : 'status-draft'}`} 
                            style={{
                              padding: '6px 12px',
                              borderRadius: '12px',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              backgroundColor: p.is_active ? '#ecfdf5' : '#fee2e2',
                              color: p.is_active ? '#059669' : '#ef4444',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            {p.is_active ? "Active" : "Inactive"}
                          </button>
                        </td>
                        <td className="actions">
                          <button className="edit-btn" onClick={() => handleEdit(p, 'popups')}><Edit size={16} /></button>
                          <button className="delete-btn" onClick={() => handleDelete(p.id, 'popups')}><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                    {popups.length === 0 && (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: "#211F1F" }}>
                          No popups found. Click "Add New" to create one!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}

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



              {activeTab === "gallery" && (() => {
                // Group gallery items by category (Folder Name)
                const groupedGallery = {};
                gallery.forEach(g => {
                  const catName = g.category || "General";
                  if (!groupedGallery[catName]) {
                    groupedGallery[catName] = {
                      title: catName,
                      subtitle: g.folder_date || "Gallery Updates",
                      images: [],
                      latestImage: null,
                      latestImageId: null
                    };
                  }
                  groupedGallery[catName].images.push(g);
                  if (!groupedGallery[catName].latestImage || g.id > groupedGallery[catName].latestImageId) {
                    groupedGallery[catName].latestImage = g.image_url;
                    groupedGallery[catName].latestImageId = g.id;
                  }
                });
                const adminFolders = Object.values(groupedGallery);

                if (activeFolder) {
                  const currentFolder = groupedGallery[activeFolder];
                  if (!currentFolder) {
                    setActiveFolder(null);
                    return null;
                  }

                  return (
                    <div className="folder-detail-container">
                      <div className="folder-detail-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0' }}>
                        <div>
                          <button className="back-btn" onClick={() => setActiveFolder(null)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', cursor: 'pointer', fontWeight: '600', marginBottom: '8px' }}>
                            <X size={16} /> Back to Folders
                          </button>
                          <h2 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>{currentFolder.title}</h2>
                          <p style={{ margin: 0, color: "#211F1F", fontSize: '1rem' }}>Date: {currentFolder.subtitle} &bull; {currentFolder.images.length} Photos</p>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button className="edit-btn" onClick={() => handleEditFolder(currentFolder)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#e2e8f0', color: '#1e293b', cursor: 'pointer', fontWeight: '600' }}>
                            <Edit size={16} /> Edit Details
                          </button>
                          <button className="delete-btn" onClick={() => handleDeleteFolder(currentFolder.title)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#fee2e2', color: '#ef4444', cursor: 'pointer', fontWeight: '600' }}>
                            <Trash2 size={16} /> Delete Folder
                          </button>
                        </div>
                      </div>

                      <div className="folder-images-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', padding: '10px 0' }}>
                        {currentFolder.images.map(img => (
                          <div key={img.id} className="image-card-wrapper" style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', group: 'true' }}>
                            <img src={img.image_url} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <div className="image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.2s' }}>
                            <button className="delete-btn" onClick={() => handleDelete(img.id, 'gallery')} style={{ padding: '8px', borderRadius: '50%', backgroundColor: '#ef4444', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Trash2 size={18} />
                              </button>
                            </div>
                            {/* Inject inline style for hover effect */}
                            <style>{`
                              .image-card-wrapper:hover .image-overlay {
                                opacity: 1 !important;
                              }
                            `}</style>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Cover Image</th>
                        <th>Folder Name</th>
                        <th>Folder Date</th>
                        <th>Photos Count</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminFolders.map(folder => (
                        <tr key={folder.title}>
                          <td>
                            {folder.latestImage ? (
                              <img src={folder.latestImage} alt="" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6, border: '1px solid #e2e8f0' }} />
                            ) : (
                              <div className="no-img-placeholder" style={{ width: 60, height: 60, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', color: '#94a3b8', fontSize: '0.9rem' }}>No Img</div>
                            )}
                          </td>
                          <td style={{ fontWeight: '600', color: '#1e293b' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Folder size={18} style={{ color: '#B3191F' }} />
                              {folder.title}
                            </span>
                          </td>
                          <td>{folder.subtitle}</td>
                          <td style={{ fontWeight: '500' }}>{folder.images.length} Photos</td>
                          <td className="actions">
                            <button className="edit-btn" onClick={() => setActiveFolder(folder.title)} title="Open Folder" style={{ padding: '6px 12px', fontSize: '0.95rem', marginRight: '6px' }}>Open</button>
                            <button className="edit-btn" onClick={() => handleEditFolder(folder)} title="Rename / Edit details"><Edit size={16} /></button>
                            <button className="delete-btn" onClick={() => handleDeleteFolder(folder.title)} title="Delete Folder"><Trash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                      {adminFolders.length === 0 && (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: "#211F1F" }}>No gallery folders found. Click "Add New" to create one!</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                );
              })()}

              {activeTab === "documents" && (
                <>
                  <div className="doc-tip-box">
                    <FileUp size={24} style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Document & PDF Manager:</strong> Upload PDFs here to automatically publish them into dedicated pages (such as SARFAESI Attachments, Public Disclosures, Auction Notices, Investor Relations, Policies) or click <strong>Copy Link</strong> to paste the direct URL anywhere across the website (Page Builder, Blogs, Pop-ups, etc.).
                    </div>
                  </div>

                  <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '15px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', gap: '15px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: '600', color: "#211F1F", fontSize: '1rem' }}>Filter by Category:</span>
                      <select 
                        value={selectedDocCategoryFilter} 
                        onChange={(e) => setSelectedDocCategoryFilter(e.target.value)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          outline: 'none',
                          fontWeight: '600',
                          color: '#1e293b',
                          backgroundColor: '#fff',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="All">All Categories</option>
                        {documentCategories.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ color: "#211F1F", fontSize: '1rem', fontWeight: '500' }}>
                      Showing <strong>{getFilteredDocuments().length}</strong> of <strong>{documents.length}</strong> documents
                    </div>
                  </div>

                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category / Location</th>
                        <th>File & Size</th>
                        <th>Date</th>
                        <th>Direct URL</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredDocuments().map(doc => (
                        <tr key={doc.id}>
                          <td style={{ fontWeight: '600', color: '#1e293b', maxWidth: '280px' }}>
                            {doc.title}
                          </td>
                          <td>
                            <span className={`doc-badge doc-badge-${doc.category || 'general'}`}>
                              {documentCategories.find(c => c.id === doc.category)?.label.split(':')[0] || (doc.category ? doc.category.toUpperCase() : "GENERAL")}
                            </span>
                          </td>
                          <td>
                            <div className="doc-file-info">
                              <File size={16} color="#ef4444" />
                              <span style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={doc.file_name}>
                                {doc.file_name}
                              </span>
                              <span className="doc-size-tag">{formatFileSize(doc.file_size)}</span>
                            </div>
                          </td>
                          <td>{doc.publish_date ? new Date(doc.publish_date).toLocaleDateString() : ""}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => handleCopyDocLink(doc)}
                              className={`copy-link-btn ${copiedDocId === doc.id ? 'copied' : ''}`}
                              title="Copy direct public URL to clipboard"
                            >
                              {copiedDocId === doc.id ? <Check size={14} /> : <Copy size={14} />}
                              <span>{copiedDocId === doc.id ? "Copied!" : "Copy Link"}</span>
                            </button>
                          </td>
                          <td>
                            <button 
                              onClick={() => handleToggleDocument(doc.id, doc.is_active)}
                              className={`status-pill ${doc.is_active ? 'status-active' : 'status-draft'}`} 
                              style={{
                                padding: '5px 10px',
                                borderRadius: '12px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                backgroundColor: doc.is_active ? '#ecfdf5' : '#fee2e2',
                                color: doc.is_active ? '#059669' : '#ef4444',
                                border: 'none',
                                cursor: 'pointer'
                              }}
                              title="Click to toggle active visibility"
                            >
                              {doc.is_active ? "Active" : "Inactive"}
                            </button>
                          </td>
                          <td className="actions">
                            <a 
                              href={doc.full_url || `${window.location.origin}${doc.file_url}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="edit-btn" 
                              title="View / Download PDF"
                              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                            >
                              <ExternalLink size={16} />
                            </a>
                            <button className="edit-btn" onClick={() => handleEdit(doc, 'documents')} title="Edit details"><Edit size={16} /></button>
                            <button className="delete-btn" onClick={() => handleDelete(doc.id, 'documents')} title="Delete document"><Trash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                      {getFilteredDocuments().length === 0 && (
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: "#211F1F" }}>
                            No documents found. Click "Add New" to upload a PDF!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </>
              )}

              {activeTab === "overview" && (
                <div className="overview-stats">
                  <div className="stat-card">
                    <div className="stat-icon blog-icon">
                      <FileText size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Total Blogs</h3>
                      <p>{blogs.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon press-icon">
                      <Newspaper size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Press Releases</h3>
                      <p>{press.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon gallery-icon">
                      <ImageIcon size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Gallery Items</h3>
                      <p>{gallery.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon pages-icon">
                      <Layers size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Pages</h3>
                      <p>{pages.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon branches-icon" style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}>
                      <MapPin size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Total Branches</h3>
                      <p>{branches.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon popups-icon" style={{ backgroundColor: '#fef2f2', color: '#B3191F' }}>
                      <Bell size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Total Pop-Ups</h3>
                      <p>{popups.length}</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#B3191F' }}>
                      <FileUp size={28} />
                    </div>
                    <div className="stat-info">
                      <h3>Total Documents</h3>
                      <p>{documents.length}</p>
                    </div>
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
                {activeTab === "pages" && (
                  <>
                    <div className="form-group"><label>Page Title</label><input type="text" value={newPage.title} onChange={e => setNewPage({ ...newPage, title: e.target.value })} required /></div>
                    <div className="form-row">
                      <div className="form-group"><label>URL Slug</label><input type="text" value={newPage.slug} onChange={e => setNewPage({ ...newPage, slug: e.target.value })} placeholder="Leave blank to auto-generate" /></div>
                      <div className="form-group"><label>Menu Location</label>
                        <select value={newPage.menu_location} onChange={e => setNewPage({ ...newPage, menu_location: e.target.value })}>
                          <option value="none">None</option>
                          <option value="aboutus">About Us</option>
                          <option value="services">Services</option>
                          <option value="customercenter">Customer Center</option>
                          <option value="media">Media</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Banner Image</label>
                      <div className="image-upload-wrapper">
                        {newPage.banner_image ? (
                          <div className="image-preview-container">
                            <img src={newPage.banner_image} alt="Preview" className="image-preview" />
                            <div className="image-path-overlay">{newPage.banner_image}</div>
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('pages')}><X size={16} /></button>
                          </div>
                        ) : (
                          <div className="compact-upload-row">
                            <label className="upload-dropzone">
                              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'pages')} hidden />
                              <Upload size={18} /><span>Upload Banner</span>
                            </label>
                            <input type="text" className="small-input" placeholder="Paste image URL..." value={newPage.banner_image || ""} onChange={e => setNewPage({ ...newPage, banner_image: e.target.value })} />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group" style={{ height: '380px', marginBottom: '50px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B3191F', fontWeight: '700' }}>
                        <Code size={18} /> Page Content (HTML & CSS Editor)
                      </label>
                      <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: "#211F1F" }}>Write standard &lt;style&gt; tags and &lt;div&gt; structures here.</p>
                      <textarea 
                        value={newPage.content} 
                        onChange={e => setNewPage({ ...newPage, content: e.target.value })} 
                        style={{ 
                          width: '100%', 
                          height: '300px', 
                          fontFamily: 'Consolas, Monaco, "Courier New", monospace', 
                          padding: '15px', 
                          backgroundColor: '#0f172a', 
                          color: '#38bdf8', 
                          borderRadius: '8px', 
                          border: '2px solid #1e293b',
                          lineHeight: '1.6', 
                          fontSize: "18px",
                          outline: 'none',
                          resize: 'vertical'
                        }} 
                        placeholder="<style> .my-style { ... } </style> &#10;<div class='container'> ... </div>"
                      />
                    </div>
                  </>
                )}
                {activeTab === "popups" && (
                  <>
                    <div className="form-group">
                      <label>Popup Title</label>
                      <input 
                        type="text" 
                        value={newPopup.title} 
                        onChange={e => setNewPopup({ ...newPopup, title: e.target.value })} 
                        required 
                        placeholder="e.g. Festival Special Offer!" 
                      />
                    </div>
                    <div className="form-group">
                      <label>Popup Message / Announcement (Optional)</label>
                      <textarea 
                        rows="3" 
                        value={newPopup.message} 
                        onChange={e => setNewPopup({ ...newPopup, message: e.target.value })} 
                        placeholder="Type the message to display on the popup..." 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Popup Image</label>
                      <div className="image-upload-wrapper">
                        {newPopup.image_url ? (
                          <div className="image-preview-container">
                            <img src={newPopup.image_url} alt="Preview" className="image-preview" />
                            <div className="image-path-overlay">{newPopup.image_url}</div>
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('popups')}><X size={16} /></button>
                          </div>
                        ) : (
                          <label className="upload-dropzone">
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'popups')} hidden />
                            <Upload size={20} />
                            <span>Upload Popup Image</span>
                          </label>
                        )}
                        <div className="or-divider"><span>OR URL</span></div>
                        <input 
                          type="text" 
                          className="small-input" 
                          placeholder="https://example.com/popup-image.jpg" 
                          value={newPopup.image_url} 
                          onChange={e => setNewPopup({ ...newPopup, image_url: e.target.value })} 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Redirect Link (Optional)</label>
                        <input 
                          type="text" 
                          value={newPopup.link_url} 
                          onChange={e => setNewPopup({ ...newPopup, link_url: e.target.value })} 
                          placeholder="e.g. /apply-home-loan or external link" 
                        />
                      </div>
                      <div className="form-group">
                        <label>Link Button Text (Optional)</label>
                        <input 
                          type="text" 
                          value={newPopup.link_text} 
                          onChange={e => setNewPopup({ ...newPopup, link_text: e.target.value })} 
                          placeholder="e.g. Learn More" 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Start Date (Optional)</label>
                        <input 
                          type="date" 
                          value={newPopup.start_date} 
                          onChange={e => {
                            const newStart = e.target.value;
                            setNewPopup(prev => ({ ...prev, start_date: newStart }));
                          }} 
                        />
                      </div>
                      <div className="form-group">
                        <label>End Date (Optional)</label>
                        <input 
                          type="date" 
                          value={newPopup.end_date} 
                          onChange={e => setNewPopup({ ...newPopup, end_date: e.target.value })} 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ marginBottom: '5px' }}>Quick Duration Presets</label>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          type="button" 
                          onClick={() => {
                            const start = newPopup.start_date ? new Date(newPopup.start_date) : new Date();
                            const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
                            setNewPopup(prev => ({ ...prev, end_date: end.toISOString().split('T')[0] }));
                          }}
                          style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#f8fafc', fontWeight: '600' }}
                        >
                          7 Days
                        </button>
                        <button 
                          type="button" 
                          onClick={() => {
                            const start = newPopup.start_date ? new Date(newPopup.start_date) : new Date();
                            const end = new Date(start.getTime() + 15 * 24 * 60 * 60 * 1000);
                            setNewPopup(prev => ({ ...prev, end_date: end.toISOString().split('T')[0] }));
                          }}
                          style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#f8fafc', fontWeight: '600' }}
                        >
                          15 Days
                        </button>
                        <button 
                          type="button" 
                          onClick={() => {
                            const start = newPopup.start_date ? new Date(newPopup.start_date) : new Date();
                            const end = new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
                            setNewPopup(prev => ({ ...prev, end_date: end.toISOString().split('T')[0] }));
                          }}
                          style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#f8fafc', fontWeight: '600' }}
                        >
                          30 Days
                        </button>
                      </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                      <input 
                        type="checkbox" 
                        id="is_active_popup" 
                        checked={newPopup.is_active} 
                        onChange={e => setNewPopup({ ...newPopup, is_active: e.target.checked })} 
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                      <label htmlFor="is_active_popup" style={{ cursor: 'pointer', userSelect: 'none', fontWeight: '600' }}>Is Active (Enabled)</label>
                    </div>
                  </>
                )}
                {activeTab === "blogs" && (
                  <>
                    <div className="form-group"><label>Blog Title</label><input type="text" value={newBlog.title} onChange={e => setNewBlog({ ...newBlog, title: e.target.value })} required /></div>
                    <div className="form-row">
                      <div className="form-group"><label>Author</label><input type="text" value={newBlog.author} onChange={e => setNewBlog({ ...newBlog, author: e.target.value })} required /></div>
                      <div className="form-group"><label>Published Date</label><input type="date" value={newBlog.date} onChange={e => setNewBlog({ ...newBlog, date: e.target.value })} /></div>
                    </div>

                    <div className="form-group">
                      <label>Cover Image</label>
                      <div className="image-upload-wrapper">
                        {newBlog.image_url ? (
                          <div className="image-preview-container">
                            <img src={newBlog.image_url} alt="Preview" className="image-preview" />
                            <div className="image-path-overlay">{newBlog.image_url}</div>
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
                        <input type="text" className="small-input" placeholder="https://example.com/image.jpg" value={newBlog.image_url} onChange={e => setNewBlog({ ...newBlog, image_url: e.target.value })} />
                      </div>
                    </div>

                    <div className="form-group"><label>Content Snapshot</label><textarea rows="3" value={newBlog.content} onChange={e => setNewBlog({ ...newBlog, content: e.target.value })} required placeholder="Write a short summary..."></textarea></div>
                  </>
                )}
                {activeTab === "press" && (
                  <>
                    <div className="form-group"><label>Press Release Title</label><input type="text" value={newPress.title} onChange={e => setNewPress({ ...newPress, title: e.target.value })} required /></div>
                    <div className="form-group"><label>Published Date</label><input type="date" value={newPress.date} onChange={e => setNewPress({ ...newPress, date: e.target.value })} /></div>

                    <div className="form-group">
                      <label>Thumbnail Image</label>
                      <div className="image-upload-wrapper">
                        {newPress.image_url ? (
                          <div className="image-preview-container">
                            <img src={newPress.image_url} alt="Preview" className="image-preview" />
                            <div className="image-path-overlay">{newPress.image_url}</div>
                            <button type="button" className="remove-image-btn" onClick={() => removeImage('press')}><X size={16} /></button>
                          </div>
                        ) : (
                          <div className="compact-upload-row">
                            <label className="upload-dropzone">
                              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'press')} hidden />
                              <Upload size={18} /><span>Upload</span>
                            </label>
                            <input type="text" className="small-input" placeholder="Paste image URL..." value={newPress.image_url} onChange={e => setNewPress({ ...newPress, image_url: e.target.value })} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group"><label>Description</label><textarea rows="2" value={newPress.content} onChange={e => setNewPress({ ...newPress, content: e.target.value })} placeholder="Small snippet for the card..."></textarea></div>
                  </>
                )}

                {activeTab === "branches" && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>City / Branch Name</label>
                        <input type="text" value={newBranch.city} onChange={e => setNewBranch({ ...newBranch, city: e.target.value })} required placeholder="e.g. JP Nagar" />
                      </div>
                      <div className="form-group">
                        <label>State</label>
                        <select value={newBranch.state} onChange={e => setNewBranch({ ...newBranch, state: e.target.value })} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }}>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Date Opened</label>
                        <input type="date" value={newBranch.opened} onChange={e => setNewBranch({ ...newBranch, opened: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label>Contact Number</label>
                        <input type="text" value={newBranch.contact} onChange={e => setNewBranch({ ...newBranch, contact: e.target.value })} required placeholder="e.g. 1800-309-1516" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea rows="3" value={newBranch.address} onChange={e => setNewBranch({ ...newBranch, address: e.target.value })} required placeholder="Full street address..." />
                    </div>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                      <input 
                        type="checkbox" 
                        id="is_new" 
                        checked={newBranch.is_new} 
                        onChange={e => setNewBranch({ ...newBranch, is_new: e.target.checked })} 
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                      <label htmlFor="is_new" style={{ cursor: 'pointer', userSelect: 'none', fontWeight: '600' }}>Mark as Newly Opened (Show in "Newly Opened Branches" section)</label>
                    </div>
                  </>
                )}

                {activeTab === "gallery" && (
                  <>
                    {editingFolder ? (
                      <>
                        <div className="form-group">
                          <label>Event Name (Folder Name)</label>
                          <input 
                            type="text" 
                            value={editingFolder.title} 
                            onChange={e => setEditingFolder({ ...editingFolder, title: e.target.value })} 
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>Folder Date / Month-Year (e.g. January 2026)</label>
                          <input 
                            type="text" 
                            value={editingFolder.folder_date} 
                            onChange={e => setEditingFolder({ ...editingFolder, folder_date: e.target.value })} 
                            required 
                          />
                        </div>
                        
                        <div className="form-group">
                          <label>Add New Photos to Folder (Dump Multiple Images)</label>
                          <div className="image-upload-wrapper" style={{ border: '2px dashed #cbd5e1', padding: '20px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                            <label className="upload-dropzone" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: "#211F1F" }}>
                              <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleMultipleImageUpload} 
                                multiple 
                                hidden 
                              />
                              <Upload size={28} style={{ color: '#B3191F' }} />
                              <span style={{ fontWeight: '600' }}>Click to select and upload new images to this folder</span>
                              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Supports PNG, JPG, JPEG, WEBP</span>
                            </label>
                          </div>
                          {uploadingMultiple && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', color: '#B3191F', fontWeight: '600' }}>
                              <Loader2 className="spin" size={16} /> Uploading images... please wait
                            </div>
                          )}
                          
                          {editingFolder.image_urls && editingFolder.image_urls.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '1rem' }}>New Photos to Add ({editingFolder.image_urls.length})</label>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px' }}>
                                {editingFolder.image_urls.map((url, idx) => (
                                  <div key={idx} style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: '1px solid #cbd5e1', height: '80px' }}>
                                    <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <button 
                                      type="button" 
                                      onClick={() => removeMultipleImage(idx)} 
                                      style={{ position: 'absolute', top: '2px', right: '2px', padding: '2px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.9)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                      <X size={10} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="form-group">
                          <label>Event Name (Folder Name)</label>
                          <input 
                            type="text" 
                            value={newGallery.title} 
                            onChange={e => setNewGallery({ ...newGallery, title: e.target.value })} 
                            required 
                            placeholder="e.g. General Medical Camp" 
                          />
                        </div>
                        <div className="form-group">
                          <label>Folder Date / Month-Year (e.g. January 2026)</label>
                          <input 
                            type="text" 
                            value={newGallery.folder_date} 
                            onChange={e => setNewGallery({ ...newGallery, folder_date: e.target.value })} 
                            required 
                            placeholder="e.g. January 2026" 
                          />
                        </div>
                        <div className="form-group">
                          <label>Upload Gallery Photos (Dump Multiple Images)</label>
                          <div className="image-upload-wrapper" style={{ border: '2px dashed #cbd5e1', padding: '20px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                            <label className="upload-dropzone" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: "#211F1F" }}>
                              <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleMultipleImageUpload} 
                                multiple 
                                hidden 
                              />
                              <Upload size={28} style={{ color: '#B3191F' }} />
                              <span style={{ fontWeight: '600' }}>Click to select and upload multiple images</span>
                              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Supports PNG, JPG, JPEG, WEBP</span>
                            </label>
                          </div>
                          {uploadingMultiple && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', color: '#B3191F', fontWeight: '600' }}>
                              <Loader2 className="spin" size={16} /> Uploading images... please wait
                            </div>
                          )}
                          
                          {newGallery.image_urls && newGallery.image_urls.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '1rem' }}>Uploaded Photos ({newGallery.image_urls.length})</label>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px' }}>
                                {newGallery.image_urls.map((url, idx) => (
                                  <div key={idx} style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: '1px solid #cbd5e1', height: '80px' }}>
                                    <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <button 
                                      type="button" 
                                      onClick={() => removeMultipleImage(idx)} 
                                      style={{ position: 'absolute', top: '2px', right: '2px', padding: '2px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.9)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                      <X size={10} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                )}

                {activeTab === "documents" && (
                  <>
                    <div className="form-group">
                      <label>Document Title / Display Name *</label>
                      <input 
                        type="text" 
                        value={newDocument.title} 
                        onChange={e => setNewDocument({ ...newDocument, title: e.target.value })} 
                        required 
                        placeholder="e.g. Updated list of properties under SARFAESI Act as on 31st August 2026" 
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Target Category / Website Location *</label>
                        <select 
                          value={newDocument.category} 
                          onChange={e => setNewDocument({ ...newDocument, category: e.target.value })}
                        >
                          {documentCategories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Publish / Effective Date</label>
                        <input 
                          type="date" 
                          value={newDocument.publish_date} 
                          onChange={e => setNewDocument({ ...newDocument, publish_date: e.target.value })} 
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>{editingId ? "Replace PDF Document (Leave empty to keep existing)" : "Upload PDF Document *"}</label>
                      <div className="image-upload-wrapper">
                        <label className="upload-dropzone" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', border: '2px dashed #cbd5e1', borderRadius: '12px', background: '#f8fafc' }}>
                          <input 
                            type="file" 
                            accept=".pdf,application/pdf" 
                            onChange={(e) => setDocFile(e.target.files[0] || null)} 
                            hidden 
                          />
                          <FileUp size={32} color="#B3191F" style={{ marginBottom: '8px' }} />
                          <span style={{ fontWeight: '600', color: '#1e293b' }}>
                            {docFile ? docFile.name : (editingId ? "Click or drag to replace PDF" : "Click or drag to select PDF document")}
                          </span>
                          <span style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
                            {docFile ? `${(docFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload` : "Maximum size 35MB • PDF format only"}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Additional Notes / Metadata (Optional)</label>
                      <input 
                        type="text" 
                        value={newDocument.extra_info} 
                        onChange={e => setNewDocument({ ...newDocument, extra_info: e.target.value })} 
                        placeholder="e.g. Borrower name for auction notices, password for protected files, or reference ID" 
                      />
                    </div>

                    <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                      <input 
                        type="checkbox" 
                        id="doc_is_active" 
                        checked={newDocument.is_active} 
                        onChange={e => setNewDocument({ ...newDocument, is_active: e.target.checked })} 
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                      <label htmlFor="doc_is_active" style={{ cursor: 'pointer', userSelect: 'none', fontWeight: '600' }}>
                        Active (Visible in public lists & accessible immediately)
                      </label>
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="submit" className="save-btn" disabled={activeTab === "gallery" && !editingFolder && (!newGallery.title || !newGallery.image_urls || newGallery.image_urls.length === 0)}>
                  {editingFolder ? "Update Folder" : (editingId ? "Update" : "Add Now")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
