const jwt = require("jsonwebtoken");
const { verifyToken } = require("../helper/tokenfunction");

exports.isAuth = (req, res, next) => {
  const { userToken } = req.cookies;
  if (verifyToken(userToken)) next();
  res.status(404).render("404");
};
