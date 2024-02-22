const express = require("express");
const routes = express.Router();
const {
  renderHomePage,
  renderLoginPage,
  renderRegisterPage,
  renderProfilePage,
} = require("../controllers/pagesController");

routes.get("/", renderHomePage);
routes.get("/login", renderLoginPage);
routes.get("/register", renderRegisterPage);
routes.get("/profile", renderProfilePage);

module.exports = routes;
