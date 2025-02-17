const express = require('express');
const router = express.Router();
const con = require('../database/Connection');
const jwt = require('jsonwebtoken');

router.post('/SellerSignUp', (req, res) => {
    const { FullName, Age, Address, Contact, Password, ConfirmPassword } = req.body;

    // Check for required fields
    if (!FullName || !Age || !Address || !Contact || !Password || !ConfirmPassword) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Check if passwords match
    if (Password !== ConfirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'Passwords do not match'
        });
    }

    // SQL query to insert new seller
    const sql = `INSERT INTO sellerlogin (FullName, Age, Address, Contact, Password) values (?,?,?,?,?)`;
    con.query(sql, [FullName, Age, Address, Contact, Password], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error inserting into the database"
            });
        } else {
            return res.status(200).json({
                success: true,
                message: 'Sign Up Successful',
                sellerId: results.insertId // Corrected key to `insertId`
            });
        }
    });
});

router.get('/SellerSignIn', (req, res) => {
    const { Contact, Password } = req.query;

    // Check for required fields
    if (!Contact || !Password) {
        return res.status(400).json({
            success: false,
            message: "Contact and password are required"
        });
    }

    // SQL query to check seller login
    const sql = `SELECT Seller_Id, Contact, Password FROM sellerlogin WHERE Contact = ? AND Password = ?`;
    con.query(sql, [Contact, Password], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error selecting from database'
            });
        }

        // Check if user exists
        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ Seller_Id: results[0].Seller_Id }, 'program', { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: 'Sign In Successful',
            token: token,
            user: results[0]
        });
    });
});

module.exports = router;
