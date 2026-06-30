/**
 * Normalizes an image URL to a relative path starting with /uploads/.
 * If the input is not a valid upload path, it returns the input as-is.
 */
const normalizeToRelative = (url) => {
    if (!url || typeof url !== 'string') return url;
    
    // Match anything starting with /uploads/
    const match = url.match(/\/uploads\/[^\s'"]+/);
    if (match) {
        return match[0];
    }
    
    // Check if it is a relative path like "uploads/..."
    if (url.startsWith('uploads/')) {
        return '/' + url;
    }
    
    return url;
};

/**
 * Converts a relative path or an old localhost absolute path to a fully-qualified dynamic absolute URL.
 */
const getAbsoluteUrl = (req, url) => {
    if (!url || typeof url !== 'string') return url;
    
    // If it points to local uploads directory, is relative, or has localhost:5001/uploads/
    if (url.startsWith('/uploads/') || url.startsWith('uploads/') || url.includes('localhost:5001/uploads/')) {
        const parts = url.split('/uploads/');
        const filename = parts[parts.length - 1];
        return `${req.protocol}://${req.get('host')}/uploads/${filename}`;
    }
    
    return url;
};

module.exports = {
    normalizeToRelative,
    getAbsoluteUrl
};
