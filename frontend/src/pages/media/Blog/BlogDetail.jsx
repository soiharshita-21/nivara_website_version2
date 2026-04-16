import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import { blogData } from "./blogData"; // Removed in favor of initialBlogData fallback

import "./BlogDetail.css";
import home2 from "../../../assets/images/home2.png";

import axios from "axios";

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const [post, setPost] = React.useState(null);
    const [allPosts, setAllPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchData = async () => {
            try {
                // Fetch the specific post
                const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
                const found = response.data;
                
                // Fetch all posts for sidebar/related
                const allRes = await axios.get("http://localhost:5000/api/blogs");
                setAllPosts(allRes.data);

                if (found) {
                    setPost({
                        ...found,
                        image: found.image_url || found.image,
                        content: typeof found.content === 'string' 
                            ? <div dangerouslySetInnerHTML={{ __html: found.content }} /> 
                            : found.content,
                        author: found.author || "ADMIN",
                        comments: found.comments || "0 comments",
                        tags: typeof found.tags === 'string' ? JSON.parse(found.tags) : (found.tags || ["Blog", "Nivara"])
                    });
                }
            } catch (error) {
                console.error("Error fetching blog detail:", error);
                // Fallback to local storage if API fails
                const saved = JSON.parse(localStorage.getItem("nivara_blogs")) || [];
                setAllPosts(saved);
                const found = saved.find(b => (b.slug || b.id.toString()) === slug);
                if (found) {
                    setPost({
                        ...found,
                        image: found.image,
                        content: typeof found.content === 'string' 
                            ? <div dangerouslySetInnerHTML={{ __html: found.content }} /> 
                            : found.content,
                        author: found.author || "ADMIN",
                        comments: found.comments || "0 comments",
                        tags: found.tags || ["Blog", "Nivara"]
                    });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) return <div>Loading...</div>;

    if (!post) {
        return (
            <div className="error-page">
                <h2>Post not found</h2>
                <Link to="/media/blog/blog">Back to Blog</Link>
            </div>
        );
    }

    // Get related posts
    const relatedPosts = allPosts.filter((p) => (p.slug || p.id.toString()) !== slug).slice(0, 2);

    return (
        <div className="blog-detail-page">
            {/* Banner */}
            <div className="blog-detail-hero">
                <img src={home2} alt="Blog Banner" />

                <div className="blog-detail-breadcrumb">
                    <Link to="/">Nivara Home</Link>
                    <span className="separator">&gt;</span>
                    <Link to="/media/blog/blog">Blog</Link>
                    <span className="separator">&gt;</span>
                    <span>{post.title}</span>
                </div>

                <div className="blog-detail-hero-content">
                    <h1>{post.title}</h1>

                    <button
                        className="apply-now-btn"
                        onClick={() => navigate("/apply-home-loan")}
                    >
                        APPLY NOW
                    </button>
                </div>
            </div>

            <div className="blog-detail-wrapper">
                <div className="blog-detail-container">
                    <main className="blog-main-content animate-pop-up">
                        <h1 className="post-title">{post.title}</h1>

                        <div className="post-meta">
                            <span className="meta-item"><i className="far fa-calendar-alt"></i> {post.date}</span>
                            <span className="meta-item"><i className="far fa-user"></i> By: {post.author}</span>
                            <span className="meta-item"><i className="far fa-comment"></i> {post.comments}</span>
                        </div>

                        <div className="post-image main-image">
                            <img src={post.image} alt={post.title} />
                        </div>

                        <div className="post-body">
                            {post.content}
                        </div>

                        <div className="post-tags-container">
                            <h4 className="tags-label">Tags:</h4>
                            <div className="post-tags">
                                {post.tags.map((tag, idx) => (
                                    <span key={idx}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="related-blogs-section">
                            <h3>Related post</h3>
                            <div className="related-grid">
                                {relatedPosts.map((rPost) => {
                                    const rSlug = rPost.slug || rPost.id.toString();
                                    return (
                                        <div className="related-item" key={rSlug} onClick={() => navigate(`/media/blog/${rSlug}`)}>
                                            <span className="category">Bangalore housing loan blog</span>
                                            <h4>{rPost.title}</h4>
                                            <span className="in-blog">in "Blog"</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="author-box">
                            <div className="author-avatar">{post.author.charAt(0).toUpperCase()}</div>
                            <div className="author-info">
                                <h4>{post.author}</h4>
                                <p>Nivara Content Team</p>
                            </div>
                        </div>

                        <div className="comment-section">
                            <h3>Leave A Comment</h3>
                            <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
                            <form className="comment-form">
                                <div className="form-group">
                                    <textarea placeholder="Comment *" rows="6" required></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name *" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email *" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="form-checkbox">
                                    <input type="checkbox" id="save-info" />
                                    <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>
                                <button type="submit" className="submit-comment">Post Comment</button>
                            </form>
                        </div>
                    </main>

                    <aside className="blog-sidebar animate-pop-up">
                        <div className="sidebar-widget search-widget">
                            <div className="search-box">
                                <input type="text" placeholder="Search..." />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Recent Posts</h3>
                            <ul className="recent-posts">
                                {allPosts.map((p) => {
                                    const pSlug = p.slug || p.id.toString();
                                    return (
                                        <li key={pSlug}>
                                            <Link to={`/media/blog/${pSlug}`}>{p.title}</Link>
                                            <span className="recent-date">{p.date}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>


                        <div className="sidebar-widget">
                            <h3>Recent Comments</h3>
                            <ul className="recent-comments">
                                <li>No comments yet.</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Archives</h3>
                            <ul>
                                <li>August 2025</li>
                                <li>February 2024</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Categories</h3>
                            <ul>
                                <li>Blog</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;