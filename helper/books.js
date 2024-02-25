const { axGetAllBooks } = require("../api/axiosBooks");
const { verifyToken } = require("./tokenfunction");

module.exports = {
  async   getBooksByUser(token) {
    const user = verifyToken(token);
    const { data } = await axGetAllBooks();
    return data.filter((book) => book.authorId == user.authorId);
  },
};
