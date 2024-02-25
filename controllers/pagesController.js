const { jwtConfig } = require("../config/config");
const { verifyToken } = require("../helper/tokenfunction");

exports.renderHomePage = (req, res) => {
  res.status(200).render("home");
};

exports.renderErrorPage = (req, res) => {
  res.status(200).render("404");
};

exports.renderConnectPage = (req, res) => {
  res.status(200).render("regi&logi");
};

exports.renderLoginPage = (req, res) => {
  res.status(200).render("login");
};

exports.renderRegisterPage = (req, res) => {
  res.status(200).render("register");
};

exports.renderProfilePage = (req, res) => {
  const user = verifyToken(req.cookies.userToken, jwtConfig.secretKey);
  res.status(200).render("profile", { user });
};
