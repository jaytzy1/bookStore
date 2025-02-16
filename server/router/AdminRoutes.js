const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const con = require('../database/Connection')
router.post('/SignUp',(req,res) =>{
    const {username,password,confirmPassword} = req.body

    if(!username || !password){
        res.status(400).json({
            message: "username and password are required"
        })
    }
    if(password !== confirmPassword){
        res.status(400).json({
            message: "password does not match"
        })
    }

    const sql = `Insert into admin (username,password) values (?,?)`
    con.query(sql,[username,password],(err,results) =>{
       if(err){
        res.status(500).json({
            message:"error inserting into database"
        })
       }else{
        res.status(200).json({
            message: "sign up sucessfully",
            results: results.insertId
        })
       }
    })

})

router.get('/SignIn',(req,res) =>{
    const {username,password} = req.query

    if(!username || !password){
        res.status(400).json({
            message: "username and password are required"
        })
    }
    const sql = `select admin_id,username,password from admin where username = ? and password = ?`
    con.query(sql,[username,password],(err,results) =>{
        if(err){
            res.status(500).json({
                message: "error selecting from database",
                error: err
            })
        }
        if (results.length === 0) {
            return res.status(404).json({
                message: "Invalid credentials"
            });
        }

         const token = jwt.sign({ id: results[0].admin_id }, 'admin', { expiresIn: '1h' });
            
            res.status(200).json({
                message: "sign In sucessfully",
                token: token
            
            })
        
    })

})

router.get('/table',(req,res) =>{

   const sql = `Select FullName, Age,Address,Contact from sellerlogin `
   con.query(sql,(err,results) =>{
    if(err){
      return  res.status(500).json({
            message: "error selecting from database"
        })
   }else{
    res.status(200).json({
        message: "sucessfully selecting from databsase ",
        results: results
    })
   }
   })
})

router.get('/CustomerTable',(req,res) =>{
    const sql = `Select username from loginuser`
    con.query(sql,(err,results) =>{
        if(err){
            res.status(400).json({
                message: "error selecting from database"
            })
        }else{
            res.status(200).json({
                message: "sucessfull selecting from database",
                data: results
            
            })
        }
    })
})
module.exports = router