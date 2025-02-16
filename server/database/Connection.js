const mysql = require('mysql')

const dbconfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore'
})
dbconfig.connect((err) =>{
    if(err){
        console.error('database not connnected')
    }else{
        console.log('database connected')
    }
})
module.exports = dbconfig