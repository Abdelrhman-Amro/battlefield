#!/usr/bin/env node

function fun(a) {
  let arr = a.splice(, 3);
  return arr;
}

const x = fun([1, 2, 3, 4, 5, 6, 7]);
console.log(x);
