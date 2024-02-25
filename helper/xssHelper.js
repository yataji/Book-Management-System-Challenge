const xss = require("xss");

const xssHelper = (body, fields) => {
  for (field in fields) {
    if (body[fields[field]]) body[fields[field]] = xss(body[fields[field]]);
  }
};

module.exports = xssHelper;
