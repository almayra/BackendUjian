const {db}=require('../connection')

module.exports={
    getCategory: (req, res)=>{
        var sql= `SELECT * FROM categories WHERE nama='${nama}'`
        db.query(sql, (err, results)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    getCategoryId: (req, res)=>{
        var sql=`SELECT * FROM categories WHERE id='${req.params.id}'`
        db.query(sql, (err, results1)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).send(results1)
        })
    },
    // addCategory: (req, res)=>{
    //     var category=req.body.category
    //     if(category){
    //         var sql=`INSERT INTO categories `
    //     }
    // },
    editCategory: (req, res)=>{
        var CategoryUpdates=req.body
        var sql=`UPDATE categories SET ? WHERE id='${req.params.id}'`
        db.query(sql, CategoryUpdates, (err, results2)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).send(results2)
        })
    },
    deleteCategory: (req, res)=>{
        var sql=`DELETE FROM categories WHERE id='${req.params.id}'`
        db.query(sql, (err, results3)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).send(results3)
        })
    }
}