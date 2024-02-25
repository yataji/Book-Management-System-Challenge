const express = require("express");
const routes = express.Router();
const {
  getUserById,
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
  connectProfile,
} = require("../controllers/usersController");
const { isAuth } = require("../middleware/checkAuth");
const { renderProfilePage } = require("../controllers/pagesController");
const { loginXss, registerXss } = require("../middleware/xss");

routes.get("/", getAllUser);
routes.post("/login", loginXss ,connectProfile);
routes.get("/profile", isAuth, renderProfilePage);
routes.get("/:id", getUserById);

routes.post("/", registerXss, addUser);

routes.put("/:id", updateUser);

routes.delete("/:id", deleteUser);

module.exports = routes;
