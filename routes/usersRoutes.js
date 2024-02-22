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

const qwerty = (req, res, next) => {
  console.log("next");
  next();
};

routes.get("/", getAllUser);
routes.post("/profile", qwerty, connectProfile);
routes.get("/:id", getUserById);

routes.post("/", addUser);

routes.put("/:id", updateUser);

routes.delete("/:id", deleteUser);

module.exports = routes;
