const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://80.78.243.244:8080',
      changeOrigin: true,
    })
  );
};