const express=require('express')
const {MovieController}=require('../controllers')
const router=express.Router()

router.get('/getmovies', MovieController.getMovies)
router.get('/getmovies/:id', MovieController.getMoviesId)
router.post('/addmovies', MovieController.addMovies)
router.put('/editmovies/:id', MovieController.editMovies)
router.delete('/deletemovies', MovieController.deleteMovies)

module.exports=router
