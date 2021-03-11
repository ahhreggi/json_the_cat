const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback("Request failed!", null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback("Breed not found!", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };