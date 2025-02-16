const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const con = require('../database/Connection')

router.post('/SignUp',(req,res) =>{
    const {username,password,confirmPassword} = req.body

    if(!username || !password || !confirmPassword){
        res.status(400).json({
            message: "username password and confirm Password are required"
        })
    }
    if(password !== confirmPassword){
        res.status(400).json({
            message: 'password do not match'
        })
    }
    const sql = 'INSERT INTO loginuser (username, password) VALUES (?, ?)';
    con.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Error saving user to the database' });
        }

        // Success response
        res.status(201).json({ message: 'User registered successfully', CustomerId: result.insertCustomer_Id });
    });
});

router.get('/SignIn', (req, res) => {
    const { username, password } = req.query;
    

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }

    const sql = `SELECT * FROM loginuser WHERE username = ? AND password = ?`;
    con.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                message: 'Error selecting from database'
            });
        }

        if (result.length === 0) {
            return res.status(400).json({
                message: 'Invalid username or password'
            });
        }

         const token = jwt.sign({ Customer_Id: result[0].Customer_Id }, 'program', { expiresIn: '1h' });
       
               return res.status(200).json({
                   message: 'Sign In Successful',
                   token: token, // send the token to the user
                   user: result[0]
               });
    });
});

module.exports = router;


