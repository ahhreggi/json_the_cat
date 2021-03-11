const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback("Request failed!", null);
    } else {
      callback(null, JSON.parse(body));
    }
  });
};

module.exports = { fetchBreedDescription };