const ProductModel=require('../Model/ProductModel');
const mongoose=require('mongoose');
const { off } = require('../Model/ProductModel');

module.exports.getProducts=async function getProducts(req,res)
{
   
  try{
  let pageNumber=req.params.pageNumber;
  let providedLimit=20;
  if(pageNumber===undefined)
  {
    return res.json({
      message:'data to page',
    })
  }
  const products=await ProductModel.find().limit(providedLimit).skip((pageNumber-1)*providedLimit);
  if(products.length==0)
  {
  return res.status(500).json({
    message:'No more products',
  });
}
  return res.status(200).json({
    data:products,
  });
}
catch(err)
{
  return res.status(500).json({
    message:err.message,
  });
}
}