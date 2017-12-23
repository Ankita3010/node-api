var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} =require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};

// -- old
//var newUser= new User({
//    email: 'abc@efg.com'
//});
//
//newUser.save().then((doc) => {
//    console.log(JSON.stringify(doc, undefined,2));
//}, (err) => {
//    console.log('Unable to add doc ',err);
//});