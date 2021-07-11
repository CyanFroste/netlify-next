exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "Cyan Froste",
      git: "https://github.com/CyanFroste",
    }),
  };
};
