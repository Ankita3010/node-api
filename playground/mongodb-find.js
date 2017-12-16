//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.', err);
    }
    console.log('Connected to MongoDB server.');
    //find returns mongoDB cursor
//    db.collection('Todos').find({
//        _id: new ObjectID('5a351b8bbdae48a542829d20')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined,2));
//    }, (err) => {
//        console.log('Unable to fetch data ', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch data ', err);
//    });

    db.collection('Users').find({name: 'Ankita'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
       console.log("Unable to fetch data ", err); 
    });
    
    db.collection('Users').find().count().then
//    db.close();
} );