const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const con = require('../database/Connection');

// SignUp Route
router.post('/SignUp', (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ success: false, message: "Username, password, and confirm password are required." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match.' });
    }

    const sql = 'INSERT INTO loginuser (username, password) VALUES (?, ?)';
    con.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Error saving user to the database.' });
        }
        res.status(201).json({ success: true, message: 'User registered successfully.', CustomerId: result.insertCustomer_Id });
    });
});

// SignIn Route
router.get('/SignIn', (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    const sql = 'SELECT * FROM loginuser WHERE username = ? AND password = ?';
    con.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Error querying the database.' });
        }

        if (result.length === 0) {
            return res.status(400).json({ success: false, message: 'Invalid username or password.' });
        }

        const token = jwt.sign({ Customer_Id: result[0].Customer_Id }, 'program', { expiresIn: '1h' });
        return res.status(200).json({
            success: true,
            message: 'Sign In Successful.',
            token: token,
            user: result[0]
        });
    });
});

module.exports = router;
