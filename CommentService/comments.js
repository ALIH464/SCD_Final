const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { addComment, getComments } = require('../../controllers/commentController');
const authMiddleware = require('../../middleware/auth');
const router = express.Router();
const dotenv = require('dotenv');
const port = 3002;
app.use(express.json());
dotenv.config();
 MONGO_URI  ="mongodb+srv://i222443:haider@cluster0.72aruj6.mongodb.net/" ;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


router.post('/', authMiddleware, addComment);           // ✅ Protected
router.get('/:blogId', getComments);                    // ❌ Public

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = router;