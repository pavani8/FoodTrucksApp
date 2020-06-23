const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...",err);
    process.exit();    
});


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});   
});

// app.get('/ping', (req, res) => {
//    // res.json({"message": "Welcome to EasyNotes application."});  
//    res.send("Pong"); 
// });

// app.post('/ping', (req,res)=>{
//     console.log(req.body);
//     res.send(req.body);
// });

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});