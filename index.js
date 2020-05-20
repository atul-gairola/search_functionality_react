const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const searchFunction = require('./searchFunctionality');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let movie = 'sunshine';

    const res = searchFunction(movie, db);
    console.log(res);

app.get('/', (req, res) => {
res.send('hi');
});

app.listen(5000, () => {
    console.log('Server active on port 3000');
});