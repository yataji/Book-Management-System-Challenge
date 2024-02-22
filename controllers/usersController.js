const {
  axGetUserById,
  axGetAllUsers,
  axAddUser,
  axUpdateUser,
  axDeleteUser,
} = require("../api/axiosUsers");

exports.getAllUser = async (req, res) => {
  const { username, password } = req.query;
  const users = await axGetAllUsers();
  console.log(username, password);
  //   console.log("users : ", users.data);
  const user = users.data.filter((elm) => {
    elm.username == username && elm.password == password;
  });
  console.log("user : ", user);
  //   return;
  if (!user) return res.status(200).render("profile", { user });
  return res.status(404).send("user not found");
};

exports.getUserById = (req, res) => {
  const { id } = req.params.id;
  const user = axGetUserById(id);
  res.status(200).JSON(user);
};

exports.addUser = (req, res) => {
  const data = req.body;
  console.log(data);
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
