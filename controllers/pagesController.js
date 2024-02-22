exports.renderHomePage = (req, res) => {
  res.status(200).render("home");
};

exports.renderLoginPage = (req, res) => {
  res.status(200).render("login");
};

exports.renderRegisterPage = (req, res) => {
  res.status(200).render("register");
};

exports.renderProfilePage = (req, res) => {
  res.status(200).render("profile", { user });
};
