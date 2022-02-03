const { getAstraClient } = require("./utils/astraClient");

exports.handler = async function (event, context, callback) {
  const access_token = process.env.FUNCTIONS_ACCESS_TOKEN;

  const token = event.headers["x-access-token"];

  if (token !== access_token) {
    return {
      statusCode: 401,
      body: "Unauthorized",
    };
  }

  const astraClient = await getAstraClient();
  let collection = "sag_sites";

  if (event.queryStringParameters.site) {
    collection = event.queryStringParameters.site;
  }

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    const user = await users.delete(JSON.parse(event.body).id);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
