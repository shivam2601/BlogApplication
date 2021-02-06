const express = require('express');
const router = express.Router();
const {requireSignin, adminMiddleware } = require('../controllers/auth');
const {create,list,remove,read} =require('../controllers/category');
const { runValidation } = require('../validators');
const { categoryCreateValidator  } = require('../validators/category');

router.post('/category', categoryCreateValidator, runValidation,requireSignin,adminMiddleware, create);
router.get('/categories',list);          //get all category
router.get('/categories/:slug',read);    //get single category
router.delete('/category/:slug',requireSignin,adminMiddleware,remove);



module.exports = router;