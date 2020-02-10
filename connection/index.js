const mysql=require('mysql')

module.exports=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'garuda17',
    database:'belajarcrud'
})