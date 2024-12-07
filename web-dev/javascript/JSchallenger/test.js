#!/usr/bin/env node

// reduce
// acc cur
// acc.concat(cur)
function myFunction(arr) {
  return arr.sort((a, b) => {
    console.log(b.b, a.b);
    b.b - a.b;
  });
}

const x = myFunction([
  { a: 2, b: 10 },
  { a: 5, b: 4 },
]);

console.log(x);
