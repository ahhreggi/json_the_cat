const request = require('request');
const query = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + query;

const searchBreedDesc = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) {
      callback(`Request failed!`, error.message);
    } else {
      callback(null, JSON.parse(body));
    }
  });
};

searchBreedDesc(url, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    if (result.length > 0) {
      console.log(result[0].description);
    } else {
      console.log("Breed not found!");
    }
  }
});