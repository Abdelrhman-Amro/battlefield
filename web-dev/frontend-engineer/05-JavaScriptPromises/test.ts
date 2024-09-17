#!/usr/bin/env ts-node

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 complete"), 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 complete"), 1000);
  });
}

step1()
  .then((result) => {
    console.log(result); // "Step 1 complete"
    return step2();
  })
  .then((result) => {
    console.log(result); // "Step 2 complete"
  });
