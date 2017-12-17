const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to server ',err);
    }
    console.log("Connected to Server");
    
    
//    db.collection('Users').deleteMany({name:'Ankita'}).then((res)=>{
//        console.log(res);
//    })
    
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5a35056b2eba8b1f140eddd1')}).then((res) => {
        console.log(res);
    });
    
//    db.close();
});