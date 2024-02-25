const {
  axGetAllBooks,
  axGetBookById,
  axAddBook,
  axUpdateBook,
  axDeleteBook,
} = require("../api/axiosBooks");
const { getBooksByUser } = require("../helper/books");
const { verifyToken } = require("../helper/tokenfunction");

exports.getAllBooks = async () => {
  const books = await axGetAllBooks();
  return books;
};

exports.getBookById = (req, res) => {
  const { id } = req.params.id;
  const book = axGetBookById(id);
  res.status(200).send(book);
};

exports.addBook = async (req, res) => {
  const book = req.body;
  book.authorId = verifyToken(req.cookies.userToken).authorId;
  axAddBook(book);
  const { data } = await this.getAllBooks();
  res.status(201).render("allbooks", { data });
};

exports.getEditBookPage = (req, res) => {
  const { id, authorId } = req.params;
  res.status(200).render("editBook", { id, authorId });
};

exports.updateBook = (req, res) => {
  const { id, authorId } = req.params;
  // console.log(id);
  // return;
  const data = req.body;
  data.authorId = authorId;
  axUpdateBook(id, data);
  res.status(201).send("book Updated");
};

exports.deleteBook = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  return;
  axDeleteBook(id);
  const data = await getBooksByUser(req.cookies.userToken);
  res.status(200).render("mybooks", { data });
  // res.status(201).send("book Deleted");
};

exports.getPageAllBooks = async (req, res) => {
  const { data } = await this.getAllBooks();
  return res.render("allbooks", { data });
};

exports.getPageAddBook = async (req, res) => {
  return res.render("addbooks");
};

exports.getMyBooks = async (req, res) => {
  const data = await getBooksByUser(req.cookies.userToken);
  res.status(200).render("mybooks", { data });
};
