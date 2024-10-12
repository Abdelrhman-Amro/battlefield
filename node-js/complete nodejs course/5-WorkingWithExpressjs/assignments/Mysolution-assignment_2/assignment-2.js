// Modules
const express = require('express');

// Glopal variables
const app = express();
const PORT = 3000;

app.use('/user-data', (req, res) => {
  res.send('hello i am here in user-data');
});

app.use('/', (req, res) => {
    console.log("Hi....")
  res.send('hello i am here in root /');
});

app.listen(PORT);
