#!/usr/bin/env ts-node

enum Statuscode {
  SUCCESS = 200,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(status: Statuscode) {
  switch (status) {
    case Statuscode.SUCCESS:
      console.log("Success");
      break;
    case Statuscode.NotFound:
      console.log("Not Found");
      break;
    case Statuscode.InternalServerError:
      console.log("Internal Server Error");
      break;
  }
}
console.log("Before");
handleResponse(Statuscode.SUCCESS);
