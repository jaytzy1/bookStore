const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

//middleware
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true}))

//routes
const SignUpRoutes = require('./router/SignUpRoutes')
app.use('/userlogin',SignUpRoutes)

const SellerLogin = require('./router/SellerLogin')
app.use('/Seller',SellerLogin)

const ProductRoutes = require('./router/ProductRoutes')
app.use('/ProductRoutes',ProductRoutes)

const Auth = require('./router/OtpRoutes')
app.use('/Auth',Auth)

const CustomerProductRoutes = require('./router/CustomerProductRoutes')
app.use('/Customer',CustomerProductRoutes)

const AdminRoutes = require('./router/AdminRoutes')
app.use('/admin',AdminRoutes)

app.listen(port,() =>{
    console.log("listening on the port",port)
})