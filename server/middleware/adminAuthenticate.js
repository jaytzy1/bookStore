const jwt = require('jsonwebtoken')
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'Access Denied: Invalid Token Format' });
    }

    try {
        const verified = jwt.verify(token, 'admin');
        req.id = verified.id; // Store Seller_Id in the request object
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Access Denied: Invalid Token' });
    }
};


module.exports = authenticateToken