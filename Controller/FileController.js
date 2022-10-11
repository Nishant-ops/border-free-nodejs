const ProductModel=require('../Model/ProductModel');
const mongoose=require('mongoose');
const csv=require('csv-parser');
const fs=require('fs');
const multer=require('multer');

module.exports.uploadCSVFile=async function uploadCSVFile(req,res)
{
try{
//console.log(req.file);
fs.createReadStream(req.file.path)
.pipe(csv({}))
.on('data',async function(row)
{
  let images=row['Images']?row['Images']:row['productImages'];
 
  if(images!==undefined)
  {
  let productImage=images.split(",");
  console.log(productImage[0]);
  images=productImage[0];
  }
  //let productImage=images.split(',').at(0);
 // console.log(productImage);
  const product={
    productName:row['Name']?row['Name']:row['productName'],
    productDescription:row['Description']?row['Description']:row['productDescription'],
    productImages:images,
    regularPrice:row['Regular price']?row['Regular price']:row['regularPrice'],
    sellingPrice:row['Sale price']?row['Sale price']:row['sellingPrice'],
    productVariant:row['variant']?row['variant']:row['Type'],
    productCategory:row['Categories'],
  };

  await ProductModel.create(product);
})
.on('end',function()
{
    //  res.json({
    //     message:'the file is uploaded',
    // });
})
.on('error',function()
{
    res.json({
      message:'error is thrown',
    });
});
res.json({
    message:'done',
});
}
catch(err)
{
  return res.status(500).json({
    message:err.message,
  });
}
}
