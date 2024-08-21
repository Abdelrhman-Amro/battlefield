#!/usr/bin/env ts-node

// asynchronous operations need to be handling
setTimeout(() => console.log("first after 2s"), 2000);
setTimeout(() => console.log("second after 1.5s"), 1500);
setTimeout(() => console.log("third after 1.0s"), 1000);
setTimeout(() => console.log("fourth after 0.5s"), 500);

// expected output
// first after 2s
// second after 1.5s
// third after 1.0s
// fourth after 0.5s

// actual output
// fourth after 0.5s
// third after 1.0s
// second after 1.5s
// first after 2s
