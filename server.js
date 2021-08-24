let express = require('express');
let mongoose = require('mongoose');
let UserModel = require('./models/user');

// fire express app 
let app = express();

// define connection URI
const URI = 'mongodb://localhost:27017/BlogDB';

let ConnectDB = async () => {
   await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
      .then(() => {
         app.listen(3000);
         console.log("Connected to mongodb server locally :D");
         console.log("server listened to port 3000");
      })
      .catch((err) => {
         console.log(err);
      })
};

let connectedSuccessfully = async () => {
   app.listen(3000);
   console.log("Connected to mongodb server locally :D");
   console.log("server listened to port 3000");
   let newUser = {
      name: 'Fady Gamil',
      Email: 'gamilfady605@gmail.com',
      password: '01283233951'
   };

};

// connect to database
ConnectDB();
