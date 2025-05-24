const express = require('express');
const { register, login } = require('../../controllers/authController');
const mongoose = require('mongoose');
//env
const dotenv = require('dotenv');

const router = express.Router();
const app= express();
app.use(express.json());
port = 3000;
dotenv.config();
//mongoose connection
MONGODB_URI ="mongodb+srv://i222443:haider@cluster0.72aruj6.mongodb.net/";
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
router.post('/register', register);
router.post('/login', login);
app.listen(port, () => {
    console.log(`Auth service running on port ${port}`);
});
module.exports = router;
