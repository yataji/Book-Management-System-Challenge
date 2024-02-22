const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000/users",
  headers: {
    "Content-Type": "application/json",
  },
});

exports.axGetAllUsers = () => {
  return api.get("/");
};

exports.axGetUserById = (id) => {
  return api.get(`/${id}`);
};

exports.axAddUser = (data) => {
  return api.post("/", data);
};

exports.axUpdateUser = (id, data) => {
  return api.put(`/${id}`, data);
};

exports.axDeleteUser = (id) => {
  return api.delete(`/${id}`);
};
