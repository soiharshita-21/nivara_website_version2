const validateId = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "Invalid ID parameter. Must be a positive integer." });
    }
    req.validatedId = id;
    next();
};

const validateBlog = (req, res, next) => {
    const { title, slug, author, date, content } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ message: "Title is required and must be a valid string." });
    }
    if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
        return res.status(400).json({ message: "Slug is required and must be a valid string." });
    }
    if (!author || typeof author !== 'string' || author.trim().length === 0) {
        return res.status(400).json({ message: "Author is required." });
    }
    if (!date) {
        return res.status(400).json({ message: "Date is required." });
    }
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
        return res.status(400).json({ message: "Content is required." });
    }
    next();
};

const validatePressRelease = (req, res, next) => {
    const { title, date, content } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ message: "Title is required and must be a valid string." });
    }
    if (!date) {
        return res.status(400).json({ message: "Date is required." });
    }
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
        return res.status(400).json({ message: "Content is required." });
    }
    next();
};

const validateGalleryItem = (req, res, next) => {
    const { title, image_url } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ message: "Category (title) is required." });
    }
    if (!image_url || typeof image_url !== 'string' || image_url.trim().length === 0) {
        return res.status(400).json({ message: "Image URL is required." });
    }
    next();
};

const validatePage = (req, res, next) => {
    const { title, slug, content } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ message: "Title is required." });
    }
    if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
        return res.status(400).json({ message: "Slug is required." });
    }
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
        return res.status(400).json({ message: "Content is required." });
    }
    next();
};

const validateBranch = (req, res, next) => {
    const { city, state, opened, address, contact } = req.body;
    if (!city || typeof city !== 'string' || city.trim().length === 0) {
        return res.status(400).json({ message: "City is required." });
    }
    if (!state || typeof state !== 'string' || state.trim().length === 0) {
        return res.status(400).json({ message: "State is required." });
    }
    if (!opened) {
        return res.status(400).json({ message: "Opened date is required." });
    }
    if (!address || typeof address !== 'string' || address.trim().length === 0) {
        return res.status(400).json({ message: "Address is required." });
    }
    if (!contact || typeof contact !== 'string' || contact.trim().length === 0) {
        return res.status(400).json({ message: "Contact is required." });
    }
    next();
};

const escapeHtml = (text) => {
    if (!text) return '';
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;") 
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

module.exports = {
    validateId,
    validateBlog,
    validatePressRelease,
    validateGalleryItem,
    validatePage,
    validateBranch,
    escapeHtml
};
