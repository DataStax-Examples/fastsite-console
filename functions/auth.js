exports.handler = async function (event, context, callback) {
  const access_token = process.env.FUNCTIONS_ACCESS_TOKEN;

  const token = event.queryStringParameters.token;

  if (token === access_token) {
    return {
      statusCode: 200,
      body: "OK",
    };
  } else {
    return {
      statusCode: 401,
      body: "Unauthorized",
    };
  }
};
