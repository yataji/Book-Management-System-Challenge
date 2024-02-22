const express = require("express");
const routes = express.Router();
const {
  getUserById,
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

routes.get("/", getAllUser);
routes.get("/:id", getUserById);

routes.post("/", addUser);

routes.put("/:id", updateUser);

routes.delete("/:id", deleteUser);

module.exports = routes;
