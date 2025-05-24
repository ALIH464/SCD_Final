const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 3005;
app.use(express.json());
app.use('/auth', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/blogs', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/comments', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/profile', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    