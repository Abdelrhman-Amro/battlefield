#!/usr/bin/env node

let obj = {
  "key-xz": "value-xz",
};

console.log(obj.key - xz); //ReferenceError: xz is not defined
console.log(obj["key-xz"]); //value-xz
