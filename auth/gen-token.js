const jwt = require("jsonwebtoken");

module.exports = function generateToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const jwtSecret = require("./secret.js").jwtSecret;
  console.log(jwtSecret);
  const jwtOptions = {
    expiresIn: "5d"
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};
