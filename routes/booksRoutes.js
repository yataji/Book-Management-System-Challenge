const express = require("express");
const routes = express.Router();
const {
  getBookById,
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

routes.get("/", getAllBooks);
routes.get("/:id", getBookById);

routes.post("/", addBook);

routes.put("/:id", updateBook);

routes.delete("/:id", deleteBook);

module.exports = routes;
