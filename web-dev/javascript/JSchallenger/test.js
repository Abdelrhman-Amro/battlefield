#!/usr/bin/env node

function myFunction(a) {
  return a.filter((i) => i  0).length;
}

const x = myFunction([1, -2, 2, -4]);

console.log(x);
