const express = require('express')

const app = express();
const port = 3000;
const hostname = 'localhost';

app.use('/', (req, res) => {
    console.log("done");
    res.render("ok");
})

app.listen(port, hostname, err => {
    if (err){
        console.log(err);
    }
})
