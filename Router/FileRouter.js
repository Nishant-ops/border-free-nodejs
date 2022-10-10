const express=require('express');
const {uploadCSVFile}=require('../Controller/FileController');
const FileRouter=express.Router();
const multer=require('multer');
const path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/files')    
    },
    filename: (req, file, callBack) => {
     //   console.log('hello');
        callBack(null, file.originalname)
    }
})

var upload = multer({
    storage: storage,
});



FileRouter
.route('/api/file')
.post(upload.single('file'),uploadCSVFile);

module.exports=FileRouter;