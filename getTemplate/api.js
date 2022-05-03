const axios = require("axios");

function createApi(baseURL) {
  const api = axios.create({
    baseURL,
  });

  return api;
}

module.exports = { createApi };
