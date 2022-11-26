const fetch = require("node-fetch");

const API = "https://registry.npmjs.org/";

const getPackage = async (name) => {
  let response;
  try {
    response = await fetch(`${API}/${name}`);
  } catch (err) {
    console.log(err);
    return false
  }
  const data = await response.json();
  return data;
};

module.exports = { getPackage };