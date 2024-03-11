const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors())
app.use(express.json())




// database here
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'finance',
})

// route to reigster a user

app.post('./register/finace', (req, res)=>{
    //getting vars from the form
    

    //create SQL statemet to insert user into database
    const sql = "INSERT INTO users(`name`, `username`, `password`) Values(?)";
    //entering these calues through a varuabel
    const values = [
        req.body.email,
        req.body.username,
        req.body.password,
    ]

    //Query to execute SQL statement
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3003, ()=>{
    console.log('server is running on port 3003')
})