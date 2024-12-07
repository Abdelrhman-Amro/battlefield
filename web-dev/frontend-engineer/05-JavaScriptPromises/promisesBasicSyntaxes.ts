#!/usr/bin/env ts-node

let promiseObj = new Promise((resolve, reject) => {});
promiseObj
  .then((value) => {})
  .catch((reason) => {})
  .finally();

function returnPromiseObj() {
  return new Promise((resolve, reject) => {});
}
returnPromiseObj()
  .then((value) => {})
  .catch((reason) => {})
  .finally();
