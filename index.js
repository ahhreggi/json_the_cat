const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, result) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    if (result.length > 0) {
      console.log(result[0].description);
    } else {
      console.log("Breed not found!");
    }
  }
});