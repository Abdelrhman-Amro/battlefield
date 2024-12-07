#!/usr/bin/env ts-node
"use strict";
var Statuscode;
(function (Statuscode) {
    Statuscode[Statuscode["SUCCESS"] = 200] = "SUCCESS";
    Statuscode[Statuscode["NotFound"] = 404] = "NotFound";
    Statuscode[Statuscode["InternalServerError"] = 500] = "InternalServerError";
})(Statuscode || (Statuscode = {}));
function handleResponse(status) {
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
