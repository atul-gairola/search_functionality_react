const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
res.json(db);
});

app.listen(5000, () => {
    console.log('Server active on port 5000');
});