const express=require('express')
const {CategoryController}=require('../controllers')
const router=express.Router()

router.get('/getcategory', CategoryController.getCategory)
router.get('/getcategory/:id', CategoryController.getCategoryId)
router.put('/editcategory/:id', CategoryController.editCategory)
router.delete('/deletecategory/:id', CategoryController.deleteCategory)

module.exports=router