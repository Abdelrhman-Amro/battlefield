#!/usr/bin/env ts-node

// handling asynchronous operations with callbacks
function first(callback) {
  setTimeout(() => {
    console.log("first after 2s");
    callback();
  }, 2000);
}

function second(callback) {
  setTimeout(() => {
    console.log("second after 1.5s");
    callback();
  }, 1500);
}

function third(callback) {
  setTimeout(() => {
    console.log("third after 1.0s");
    callback();
  }, 1000);
}

function fourth(callback) {
  setTimeout(() => {
    console.log("fourth after 0.5s");
  }, 500);
}

first(() => {
  second(() => {
    third(() => {
      fourth();
    });
  });
});

// now the previous problem solved
// expected output
// first after 2s
// second after 1.5s
// third after 1.0s
// fourth after 0.5s

// actual output
// first after 2s
// second after 1.5s
// third after 1.0s
// fourth after 0.5s
