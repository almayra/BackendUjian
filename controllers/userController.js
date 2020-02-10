//import database
const db=require('../connection')

module.exports={
    //create data
    userCreateStore:(req,res)=>{
        //get data from frontend
        const {storeName}=req.body
        //syntax sql
        const sql=`INSERT INTO store SET ?`
        //database action
        db.query(sql,storeName, (err, result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}