const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000/books",
  headers: {
    "Content-Type": "application/json",
  },
});

exports.axGetAllBooks = () => {
    return api.get('/');
};

exports.axGetBookById = (id) => {
    return api.get(`/${id}`);
};

exports.axAddBook = (data) => {
    return api.post('/', data);
};

exports.axUpdateBook = (id, data) => {
    return api.put(`/${id}`, data);
};

exports.axDeleteBook = (id) => {
    return api.delete(`/${id}`);
};
