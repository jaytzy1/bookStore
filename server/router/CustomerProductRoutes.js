const express  = require('express');
const router = express.Router()

const con = require('../database/Connection')

router.get('/CustomerProduct',(req,res)=>{
    
    const sql = `SELECT id,descriptions,price,stock,image,category FROM sellerproduct`
    con.query(sql,(err,result) =>{
        if(err){
            return res.status(500).json({
                message: "error selecting from database"
            })
        }else{
            return res.status(200).json({
                message: "product sucessfully selecting",
                data: result
            })
        }
    })
})
router.get('/CustomerProductDetail/:id',(req,res) =>{
    const {id} = req.params;
   
    const sql = `SELECT id,descriptions,price,stock,image,category,gender FROM sellerproduct where id = ?`
    con.query(sql,[id],(err,result) =>{
        if(err){
            return res.status(500).json({
                message: "error selecting from database"
            })
        }else{
            return res.status(200).json({
                message: "product sucessfully selecting",
                data: result[0]
            })
        }
    })
})
module.exports = router