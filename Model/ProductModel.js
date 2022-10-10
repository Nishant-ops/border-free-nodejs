const mongoose =require('mongoose');
const db_link='mongodb+srv://admin:LSLEF9h3ENCLxn7@cluster0.mmuhd.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(function(db)
{
    console.log('db connected');
})
.catch(function(err)
{
    console.log(err)
}); 


const ProductSchema=mongoose.Schema({
  productName:{
    type:String,
    // required:true,
  },
  productDescription:{
    type:String,
    // required:true,
  },
  productImages:{
    type:String,
    // required:true,
  },
  regularPrice:{
   type:String,
//    required:true,
  },
  sellingPrice:{
    type:String,
    // required:true,
  },
  productVariant:{
    type:String,
    // required:true,
  },
  productCategory:{
    type:String,
    // required:true,
  }
});


const ProductModel=mongoose.model('ProductModel',ProductSchema);
module.exports=ProductModel;