const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      //target: 'http://89.111.154.212:30',
      target: 'http://localhost:3006',
      changeOrigin: true,
    })
  );
};