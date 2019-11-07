// TODO: once real API endpoint works, remove this file (and dependency from "http-proxy-middleware")

const proxy = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function(app) {
  app.use(
    '/donations',
    proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
    }),
  );
};
