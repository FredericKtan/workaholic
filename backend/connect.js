exports.connect = () =>{
    const firebase = require('firebase');
    const config = require('./config');
    //Database
    if(!firebase.apps.length){
        firebase.initializeApp(config.firebaseConfig);
    }
    firebase.auth().signInWithEmailAndPassword("lam@gmail.com","lamlam").catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    return firebase;
}