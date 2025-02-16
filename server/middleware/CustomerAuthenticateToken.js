const jwt = require('jsonwebtoken')

const CustomerAuthenticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];

    if(!authHeader){
        res.status(401).json({
            message
        })
    }
}