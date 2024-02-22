const express = require("express");
const routes = express.Router();
const {
  getBookById,
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getPageAllBooks,
  getPageAddBook,
} = require("../controllers/booksController");

routes.get("/", getAllBooks);
routes.get("/all", getPageAllBooks);
routes.get("/add", getPageAddBook);
routes.get("/:id", getBookById);

routes.post("/add", addBook);
// routes.get("/", getPageAddBook);

routes.put("/:id", updateBook);

routes.delete("/:id", deleteBook);

module.exports = routes;
