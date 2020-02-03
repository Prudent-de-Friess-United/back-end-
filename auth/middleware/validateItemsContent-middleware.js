module.exports = function validateItemsContent(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: " the ITEMS field is required." });
  } else {
    next();
  }
};
