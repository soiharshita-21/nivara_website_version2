const uploadSingle = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
    res.json({ imageUrl });
};

const uploadMultiple = (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }
    const imageUrls = req.files.map(file => `http://localhost:5001/uploads/${file.filename}`);
    res.json({ imageUrls });
};

module.exports = { uploadSingle, uploadMultiple };
