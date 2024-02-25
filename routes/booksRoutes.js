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
  getMyBooks,
  getEditBookPage,
} = require("../controllers/booksController");
const { addBookXss } = require("../middleware/xss");

routes.get("/", getAllBooks);
routes.get("/all", getPageAllBooks);
routes.get("/add", getPageAddBook);
routes.get("/mybooks", getMyBooks);
routes.get("/:id", getBookById);

routes.post("/add", addBookXss, addBook);
// routes.get("/", getPageAddBook);
routes.get("/edit/:id/:authorId", getEditBookPage);
routes.post("/edit/:id/:authorId", updateBook);

routes.get("/delete/:id", deleteBook);

module.exports = routes;
