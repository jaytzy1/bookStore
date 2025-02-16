const express = require('express');
const router = express.Router();
const con = require('../database/Connection');
const jwt = require('jsonwebtoken')
router.post('/SellerSignUp', (req, res) => {
    const { FullName, Age, Address, Contact, Password, ConfirmPassword } = req.body;

    if (!FullName || !Age || !Address || !Contact || !Password || !ConfirmPassword) {
        return res.status(400).json({
            message: "All are Required"
        });
    }

    if (Password !== ConfirmPassword) {
        return res.status(400).json({
            message: 'Password do not match'
        });
    }

    const sql = `INSERT INTO sellerlogin (FullName, Age, Address, Contact, Password) values (?,?,?,?,?)`;
    con.query(sql, [FullName, Age, Address, Contact, Password], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Error inserting into database"
            });
        } else {
            return res.status(200).json({
                message: 'Sign Up Successful',
                id: results.insertSeller_Id
            });
        }
    });
});

router.get('/SellerSignIn', (req, res) => {
    const { Contact, Password } = req.query;

    if (!Contact || !Password) {
        return res.status(400).json({
            message: "Contact and password are required"
        });
    }

    const sql = `SELECT Seller_Id , Contact, Password FROM sellerlogin WHERE Contact = ? AND Password = ?`;
    con.query(sql, [Contact, Password], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error selecting from database'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: 'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ Seller_Id: results[0].Seller_Id }, 'program', { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Sign In Successful',
            token: token, // send the token to the user
            user: results[0]
        });
    });
});

module.exports = router;
