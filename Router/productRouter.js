const express=require('express');
const {getProducts}=require('../Controller/ProductController');
const productRouter=express.Router();

productRouter
.route('/api/products/:pageNumber')
.get(getProducts);

module.exports=productRouter;