const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const cors = require('cors')
const users = require('./routes/user'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "test"
// });

// db.connect(function (err) {
//     if(err){
//         console.log("error");
//     }else{
//         console.log("connected");
//     }
// });


const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('Your server is started successfully on port 5000');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});