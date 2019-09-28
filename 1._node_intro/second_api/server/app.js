const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const fs = require('fs');

const app = express();

const request = require('request');

const me = {
    firstName: 'Adam',
    lastName: 'Cichy'
}

app.use(express.static('./../public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html')
});

app.get('/about', (req, res) => {
    res.send({
        firstName: req.query.firstName,
        lastName: req.query.lastName
    })
    // no code bellow res.send - treat it as a return statement
})

app.post('/me', (req, res) => {
    me.firstName = req.body.firstName
    me.lastName = req.body.lastName

    res.send(me);
})

app.get("/server-side-request",(req , res) => {
    request('http://www.kea.dk', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the KEA homepage.
    res.send(body);
});
})


const server = app.listen(3000, () => {
    console.log('App listening on port ', server.address().port)
})