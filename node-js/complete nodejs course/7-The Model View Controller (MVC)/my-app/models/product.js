const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'produts.json');

const getProdutsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor (t) {
    this.title = t;
  }

  save() {
    getProdutsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) {
            console.log(err)
        }
      });
    });
  }

  static fetchAll(cb) {
    getProdutsFromFile(cb);
  }
};
