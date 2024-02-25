const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config/config");

module.exports = {
  createToken(user) {
    try {
      delete user.id;
      delete user.password;
      return jwt.sign(user, jwtConfig.secretKey, {
        expiresIn: jwtConfig.expiresIn,
      });
    } catch (err) {
      console.error(" I : An error occurred in myMethod:", err.message);
    }
  },
  verifyToken(userToken) {
    try {
      return jwt.verify(userToken, jwtConfig.secretKey);
    } catch (err) {
      console.error(" II : An error occurred in myMethod:", err.message);
    }
  },
};
