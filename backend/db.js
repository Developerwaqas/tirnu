module.exports = {
    DB: 'mongodb://localhost:27017/auth'
}


// const mysql = require('mysql');
 
// const pool = mysql.createPool({
//     connectionLimit: 10,// the number of connections will node hold open to our database
//     password:"",
//     user:"root",
//     database:"test",
//     host: "localhost",
// });
 
// let db = {};
// db.getAllEmployees = () =>{
//     return new Promise((resolve, reject)=>{
//         pool.query('SELECT * FROM user ',  (error, employees)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(employees);
//         });
//     });
// };
 
  
// module.exports = db;