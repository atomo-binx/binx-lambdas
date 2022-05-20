const {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} = require("@aws-sdk/client-cognito-identity-provider");

module.exports = {
  login(email, password) {
    const client = new CognitoIdentityProviderClient({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      region: process.env.COGNITO_REGION,
    });

    return new Promise((resolve, reject) => {
      const params = {
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      };

      const command = new InitiateAuthCommand(params);

      client
        .send(command)
        .then((result) => {
          const accessToken = result["AuthenticationResult"]["AccessToken"];
          resolve(accessToken);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
