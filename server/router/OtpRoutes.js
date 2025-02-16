const express = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Generate OTP function
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit OTP
};

// Store OTPs temporarily (for the sake of simplicity in this example)
let otpStore = {};

// Create a transporter using Gmail for sending OTP emailsq
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bjayvee31@gmail.com', // Gamitin ang iyong email address
        pass: 'bnff nizl lpae iour', // Gamitin ang iyong email password o app password
    },
});

// Step 1: Sign-Up Endpoint
router.post('/sign-up', (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'Email, Password, and Confirm Password are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Generate OTP and store it temporarily
    const otp = generateOTP();
    otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    const mailOptions = {
        from: 'Book Store',
        to: email,
        subject: 'Your OTP for Sign-Up',
        text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send OTP' });
        }

        console.log('Email sent:', info.response);
        res.json({ message: 'OTP sent successfully! Please verify it to proceed.',otp });
    });
});

// Step 2: Verify OTP Endpoint
// Step 2: Verify OTP Endpoint
router.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const storedOTP = otpStore[email];

    if (!storedOTP) {
        return res.status(400).json({ message: 'OTP not found or expired' });
    }

    if (storedOTP.otp.toString() !== otp.toString()) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (Date.now() > storedOTP.expiresAt) {
        delete otpStore[email];
        return res.status(400).json({ message: 'OTP has expired' });
    }

    // I-hash ang unang password (yung password na ginamit sa sign-up form)
    bcrypt.hash(storedOTP.password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // I-save ang user sa database
        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(sql, [email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ message: 'Error saving user to the database' });
            }

            console.log('User inserted with ID:', result.insertId);
            delete otpStore[email]; // Remove OTP after successful registration
            res.json({ message: 'Account created successfully! You can now sign in.' });
        });
    });
});

// Step 3: Complete Sign-Up (Login) Endpoint
router.post('/complete-sign-up', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password are required' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // Save user to the database (using hashed password)
        console.log(`User created: ${email} with hashed password: ${hashedPassword}`);

        res.json({ message: 'Account created successfully!' });
    });
});

module.exports = router;
