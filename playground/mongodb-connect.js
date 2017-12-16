//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var objectID = new ObjectID();
//console.log(objectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.', err);
    }
    console.log('Connected to MongoDB server.');
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//       if(err){
//           return console.log('Unable to insert todo.', err);
//       } 
// console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
//    db.collection('Users').insertOne({
//        _id: 123,
//        name: 'Ankita',
//        age: 24,
//        location: 'India'
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert record ', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//       
//        for (var ind in result.ops) {
//            console.log(result.ops[ind]._id.getTimestamp());}
//    });
    
    db.close();
} );