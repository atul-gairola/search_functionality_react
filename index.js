const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const searchFunction = require('./searchFunctionality');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
res.send('hi');
const movie = 'elec';
searchFunction(movie, db);
});


app.listen(3000, () => {
    console.log('Server active on port 3000');
})