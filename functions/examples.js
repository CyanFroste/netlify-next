const { uuid } = require("../util/uuid");

exports.handler = async function (event, context) {
  const EXAMPLES = [
    {
      id: uuid(),
      title: "Visit the website",
      body: "https://netlify-identity-next.netlify.app",
    },
    {
      id: uuid(),
      title: "Cyan Froste's Github account",
      body: "https://github.com/CyanFroste",
    },
    {
      id: uuid(),
      title: "Facts",
      body: "The moon has moonquakes.\nGoosebumps are meant to ward off predators.\nShe was cute.\nHumans are the only animals that blush.",
    },
  ];

  if (context.clientContext.user)
    return {
      statusCode: 200,
      body: JSON.stringify(EXAMPLES),
    };

  return {
    statusCode: 401,
    body: JSON.stringify({
      message: "Unauthorized User",
    }),
  };
};
