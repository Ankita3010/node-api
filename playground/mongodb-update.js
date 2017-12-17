const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to server ',err);
    }
    console.log("Connected to Server");
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID("5a3644e1071633465a862a06")
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((res) => {
//        console.log(res);
//    })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a33cd8599d7141db07bf8d4")
    }, {
        $set: { name: 'Ankita'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })
//    db.close();
});