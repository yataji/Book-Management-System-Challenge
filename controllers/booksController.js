const {
  axGetAllBooks,
  axGetBookById,
  axAddBook,
  axUpdateBook,
  axDeleteBook,
} = require("../api/axiosBooks");

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
  axAddBook(book);
  const { data } = await this.getAllBooks();
  res.status(201).render("allbooks", { data });
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

exports.getPageAllBooks = async (req, res) => {
  const { data } = await this.getAllBooks();
  console.log(data);
  return res.render("allbooks", { data });
};

exports.getPageAddBook = async (req, res) => {
  return res.render("addbooks");
};
