const xss = require("xss");
const xssHelper = require("../helper/xssHelper");

module.exports = {
  registerXss(req, res, next) {
    const fields = ["username", "email", "password"];
    xssHelper(req.body, fields);
    next();
  },
  loginXss(req, res, next) {
    const fields = ["email", "password"];
    xssHelper(req.body, fields);
    next();
  },
  addBookXss(req, res, next) {
    const fields = ["title", "genre", "content"];
    xssHelper(req.body, fields);
    next();
  },
};
