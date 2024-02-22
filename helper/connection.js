const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");
const { hashing, compareHashingPass } = require("./hashing");

const checkForLogin = {
  checkEmail(email, users) {
    return users.find((elm) => elm.email == email);
  },
  async userGenerator(data) {
    data.password = await hashing(data.password);
    data.authorId = uuid();
    return data;
  },
};

module.exports = checkForLogin;
