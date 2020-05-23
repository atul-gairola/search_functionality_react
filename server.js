const express = require('express');
const bodyParser = require('body-parser');
const fuse = require('./searchFunctionality');
const path = require('path');

const app = express();

var inputMovieName = '';


app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

//home route 
app.get('/', (req, res) => {
res.send("this is server 5000");
});

//api route
app.get('/api', (req, res) => {
res.json(fuse.search(inputMovieName).splice(0,10));
});

//post request on home route 
app.post('/', (req, res) => {
inputMovieName = req.body.movie;
console.log('Body: ', inputMovieName);
});

const PORT = process.env.PORT || 5000;

// for deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });

}
    

app.listen(PORT, () => {
    console.log(`Server active on port ${PORT}`);
});