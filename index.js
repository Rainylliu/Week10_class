// Import the express library and assign it to a variable
// import express from 'express'

// const randomDog = require('random.dog.js');
// Create an instance of an express application 
// const app = express()

// Set the port the application will be running on
// const port = process.env.PORT || 3001

// Set up a response for the root path of the application
// app.get('/', async (req, res) => {
//   try {
//     const randomDogApi = randomDog.api();
//     const dogData = await randomDogApi.getDog();
//     const dogImageUrl = dogData.url;

    // Send a response with the cat image URL
  //   res.send(`<img src="${dogImageUrl}" alt="Random Dog Image">`);
  // } catch (error) {
    // Handle errors
//     console.error('Error fetching random cat image:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// Import the express library and assign it to a variable
import express from 'express';
import randomDog from 'random.dog.js';

// Create an instance of an express application 
const app = express();

// Set the port the application will be running on
const port = process.env.PORT || 3001;

// Set up a response for the root path of the application
app.get('/', async (req, res) => {
  try {
    // Create an instance of the random.dog.js API
    const randomDogApi = randomDog.api();

    // Fetch a random dog image
    const dogData = await randomDogApi.getDog();
    const dogImageUrl = dogData.url;

    // Send a response with the dog image URL
    res.send(`<img src="${dogImageUrl}" alt="Random Dog Image">`);
  } catch (error) {
    // Handle errors
    console.error('Error fetching random dog image:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
