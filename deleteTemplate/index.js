const { login } = require("./login");
const { createApi } = require("./api");

exports.handler = async (event) => {
  const { baseURL, endpoint, params } = event;

  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  const api = createApi(baseURL);

  return new Promise((resolve, reject) => {
    const accessToken = login(email, password);
    resolve(accessToken);
  })
    .then((accessToken) => {
      return api
        .delete(endpoint, {
          params: {
            ...params,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        });
    })
    .catch((error) => {
      return {
        status: "error",
        message: error.message,
      };
    });
};
