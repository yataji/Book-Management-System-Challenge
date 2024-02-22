const {
  axGetUserById,
  axGetAllUsers,
  axAddUser,
  axUpdateUser,
  axDeleteUser,
} = require("../api/axiosUsers");
const { hashing, compareHashingPass } = require("../helper/hashing");
const { checkEmail, userGenerator } = require("../helper/connection");

exports.getAllUser = async () => {
  return await axGetAllUsers();
};

exports.connectProfile = async (req, res) => {
  const { email, password } = req.body;
  const users = await axGetAllUsers();
  const userFound = checkEmail(email, users.data);
  if (!userFound) return res.send("email not found");
  if (!(await compareHashingPass(password, userFound.password)))
    return res.send("password incorrect");
  return res.status(200).render("profile", { userFound });
};

exports.getUserById = (req, res) => {
  const { id } = req.params.id;
  const user = axGetUserById(id);
  res.status(200).JSON(user);
};

exports.addUser = async (req, res) => {
  data = await userGenerator(req.body);
  axAddUser(data);
  res.status(201).redirect("/login");
};

exports.updateUser = (req, res) => {
  const { id } = req.params.id;
  const data = req.body;
  axUpdateUser(id, data);
  res.status(201).send("user updated");
};

exports.deleteUser = (req, res) => {
  const { id } = req.params.id;
  axDeleteUser(id);
  res.status(201).send("user deleted");
};
