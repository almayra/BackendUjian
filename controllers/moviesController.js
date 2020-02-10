//import database
const {db}=require('../connection')

module.exports={
   getMovies:(req, res)=>{
       var nama = req.query.nama || ''
       var tahun = req.query.alamat ? req.query.tahun : ''

       var sql=`SELECT * FROM movies WHERE nama LIKE '${nama}' AND tahun LIKE '${tahun}'`
       db.query(sql, (err, results)=>{
            if (err){
                return res.status(500).send(err)
            } 
            res.status(200).send(results)
       })
   },
   getMoviesId: (req, res)=>{
       var sql=`SELECT * FROM movies where id='${req.params.id}'`
       db.query(sql, (err, results1)=>{
           if(err){
            return res.status(500).send(err)
           }
           res.status(200).send(results1)
       })
   },
   addMovies : (req, res)=>{
    var movie=req.body
    if(movie){
        var sql =`INSERT INTO movies SET ?`
        db.query(sql, movie, (err, results2)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).send(results2)
        })
    }else{
        res.status(500).send('Please Enter All The Data')
    }
   },
   editMovies: (req, res)=>{
       var updateMovies=req.body
       var sql=`UPDATE movies SET ? WHERE id ='${req.params.id}'`

       db.query(sql, updateMovies, (err, results3)=>{
           if(err){
            return res.status(500).send(err)
           }
           res.status(200).send(results3)
       })
   },
   deleteMovies:(req, res)=>{
       var sql=`DELETE FROM movies WHERE id ='${req.params.id}'`
       db.query(sql, (err, results4)=>{
           if(err){
               return res.status(500).send(err)
           }
           res.status(200).send(results4)
       })
   }
}