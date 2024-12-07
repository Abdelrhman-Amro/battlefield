#!/usr/bin/env node
const fs = require("fs");

const path = "./docs/info.txt";

fs.stat(path, (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats);
  // we have access to the file stats in `stats`
});
