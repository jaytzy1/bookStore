const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const con = require('../database/Connection')
const authenticateToken = require('../middleware/AuthenticateToken')

cloudinary.config({
    cloud_name: 'dwksktg2b',
    api_key: '668217559371518',
    api_secret: 'BYDTqeLaR0ciwwh-Qr_mNfgoJ5k'
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        allowed_formats: ["jpg","png","jpeg","webp"]
    }
})
const upload = multer({storage})

router.post('/uploads',authenticateToken,upload.single('image'),(req,res) =>{
    const {descriptions,size,gender,price,stock,category} = req.body
    const image = req.file.path;
    const Seller_Id = req.Seller_Id;

    if (!descriptions || !size || !gender ||  !price || !stock  || !image || !category ) {
        return res.status(400).json({
            message: 'All fields (descriptions, category, stock, price, image) are required'
        });
    }

    // SQL query para magdagdag ng produkto sa database
    const sql = `INSERT INTO sellerproduct (descriptions, size ,gender , price, stock, category, image, Seller_Id) VALUES (?, ?, ?, ?, ?, ?,?,?)`;
    con.query(sql, [descriptions,size,gender,price,stock,category,image,Seller_Id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error inserting product into database',
                error: err
            });
        }

        // Success response
        return res.status(200).json({
            message: 'Product added successfully',
            productId: results.insertId,
          
            
        });
    });
    
})

router.get('/SellerProducts', authenticateToken, (req, res) => {
    console.log('Seller_Id from Token:', req.Seller_Id); // Debugging log

    const Seller_Id = req.Seller_Id;

    if (!Seller_Id) {
        return res.status(400).json({ message: 'Seller_Id is missing in the token' });
    }

    const sql = `SELECT id, descriptions, price, image, category ,gender FROM sellerproduct WHERE Seller_Id = ?`;
    console.log('Executing SQL:', sql, 'with Seller_Id:', Seller_Id); // Debugging log

    con.query(sql, [Seller_Id], (err, results) => {
        if (err) {
            console.error('Database Error:', err); // Log the error
            return res.status(500).json({
                message: 'Error retrieving products',
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No products found for this Seller_Id' });
        }

        return res.status(200).json({
            message: 'Products retrieved successfully',
            products: results
        });
    });
});

router.delete('/SellerProduct/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM sellerproduct WHERE id = ?`;

    con.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting product',err });
        }
        return res.status(200).json({ message: 'Product removed successfully',id: id });
    });
});


router.get('/SellerProduct/:id', authenticateToken, (req, res) => {
    const { id } = req.params;  // Kunin ang product id mula sa URL

    // I-validate kung valid ang 'id' (optional)
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    // SQL query para kunin ang product details mula sa database
    const sql = `SELECT id, descriptions, price, image, category, stock ,gender FROM sellerproduct WHERE id = ?`;

    // Pag-execute ng query
    con.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                message: 'Error fetching product from database',
                error: err,
            });
        }

        // Kung walang nahanap na product, ibalik ang 404 error
        if (results.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Kung may nahanap na product, ibalik ang product details
        const product = results[0];  // Kunin ang unang resulta (dahil ang id ay unique)
        return res.status(200).json({
            message: 'Product fetched successfully',
            product,
        });
    });
});

module.exports = router