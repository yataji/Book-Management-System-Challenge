const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const { server } = require("./config/config");
// const port = process.env.PORT || 7500;

const usersRoutes = require("./routes/usersRoutes");
const booksRoutes = require("./routes/booksRoutes");
const pagesRoutes = require("./routes/pagesRoutes");

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/", pagesRoutes);

app.listen(server.port, (req, res) => {
  console.log(`App runing on port ${server.port}`);
});
