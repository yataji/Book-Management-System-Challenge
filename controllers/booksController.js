const {
  axGetAllBooks,
  axGetBookById,
  axAddBook,
  axUpdateBook,
  axDeleteBook,
} = require("../api/axiosBooks");

exports.getAllBooks = (req, res) => {
  const books = axGetAllBooks();
  res.status(200).JSON(books);
};

exports.getBookById = (req, res) => {
  const { id } = req.params.id;
  const book = axGetBookById(id);
  res.status(200).JSON(book);
};

exports.addBook = (req, res) => {
  const data = req.body;
  axAddBook(data);
  res.status(201).send("book Created");
};

exports.updateBook = (req, res) => {
  const { id } = req.params.id;
  const data = req.body;
  axUpdateBook(id, data);
  res.status(201).send("book Updated");
};

exports.deleteBook = (req, res) => {
  const { id } = req.body.id;
  axDeleteBook(id);
  res.status(201).send("book Deleted");
};
