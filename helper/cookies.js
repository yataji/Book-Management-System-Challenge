const { cookies } = require("../config/config");
module.exports = {
  setCookies() {
    return {
      httpOnly: cookies.httpOnly,
      maxAge: cookies.maxAge,
    };
  },
};
