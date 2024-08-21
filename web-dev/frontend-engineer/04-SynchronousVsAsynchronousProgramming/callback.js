#!/usr/bin/env node

function fetchData(callback) {
  const error = false;
  const data = { user: "John Doe" };

  if (error) {
    callback("An error occurred!", null);
  } else {
    callback(null, data);
  }
}

function handleError(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data); // { user: "John Doe" }
  }
}

fetchData(handleError);
