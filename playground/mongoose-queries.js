const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a3b8f415c3f08232c0bfe3f';
//var id ='5a3e62d06bd93b2b60fcde5d11';
//
//if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos',todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo',todo);
//});

//Todo.findById(id).then((todo) => {
//    if(!todo){
//        return console.log('Id not found');
//    }
//    console.log('Todo By Id',todo);
//}).catch((e) => console.log(e));

    User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User By ID', user);
}).catch((e) => console.log(e));