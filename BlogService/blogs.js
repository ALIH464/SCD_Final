const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createBlog, getBlogs, incrementViews } = require('../../controllers/blogController');
const authMiddleware = require('../../middleware/auth');
const router = express.Router();
dotenv.config();
const port= 3001;
const app = express();
app.use(express.json());
MONGO_URI = "mongodb+srv://i222443:haider@cluster0.72aruj6.mongodb.net/";
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
router.post('/', authMiddleware, createBlog);           // ✅ Protected
router.get('/', getBlogs);                              // ❌ Public
router.post('/view/:blogId', incrementViews);           // ❌ Public
app.listen(port, () => {
    console.log(`Blog service running on port ${port}`);
});

module.exports = router;
