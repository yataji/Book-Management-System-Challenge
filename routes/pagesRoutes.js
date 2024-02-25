const express = require("express");
const routes = express.Router();
const {
  renderHomePage,
  renderLoginPage,
  renderRegisterPage,
  renderProfilePage,
  // logoutUser,
  renderConnectPage,
  renderErrorPage,
} = require("../controllers/pagesController");
const { isAuth } = require("../middleware/checkAuth");

routes.get("/", renderHomePage);
routes.get("/404", renderErrorPage);
routes.get("/connect", renderConnectPage);
routes.get("/login", renderLoginPage);
routes.get("/register", renderRegisterPage);
routes.get("/profile", isAuth, renderProfilePage);

module.exports = routes;
