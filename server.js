const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 7500;

const usersRoutes = require("./routes/usersRoutes");
const booksRoutes = require("./routes/booksRoutes");
const pagesRoutes = require("./routes/pagesRoutes");

app.set("view engine", "ejs");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/", pagesRoutes);

app.listen(port, (req, res) => {
  console.log(`App runing on port ${port}`);
});
