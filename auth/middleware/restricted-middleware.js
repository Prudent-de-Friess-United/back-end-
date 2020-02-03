const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const jwtSecret = require("../secret.js").jwtSecret;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "you shall not pass - you need a token" });
      } else {
        req.jwtToken = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ you: "you shall not pass - no tokin no pokin around" });
  }
};
