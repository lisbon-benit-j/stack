const authMiddleware = (req, res, next) => {
  next(); // TEMP: allow all requests
};

module.exports = authMiddleware;
