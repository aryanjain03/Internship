const app = require('express')();
require('dotenv').config();

const connection = require('./config/db');

// app.get('/', (req, res) => {
//     res.send("api running");
// });
connection.query('select * from employee', (err, result, fields) => {
    if(err) throw err;
    console.log(result);
});
const data = 46;
connection.query('select * from employee where age = ?', data, (err, result, fields) => {
    if(err) throw err;
    console.log(result);
});

app.listen(process.env.PORT || 4000, error => {
    if(error) throw error;
    console.log(`server running on ${process.env.PORT}`);
});