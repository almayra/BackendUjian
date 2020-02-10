const mysql=require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'garuda17',
    database:'movieindoxxi',
    port:'3360'
})

module.exports={db}
