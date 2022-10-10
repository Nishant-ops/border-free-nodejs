const express=require('express');
const productRouter=require('./Router/productRouter');
const FileRouter=require('./Router/FileRouter');
const path=require('path');
const app=express();
const cors=require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public/build')));
// const whitelist = ["http://localhost:3000"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: false,
// }
// app.use(cors(corsOptions))
//app.listen(8000);

app.use('/user',productRouter);
app.use('/file',FileRouter);

// const root = require('path').join(__dirname, 'public', 'build')
// app.use(express.static(root));
app.use((req,res)=>{
  res.sendFile(path.join(__dirname,'./public/build/index.html'))
  });
 app.listen(process.env.PORT||5000);
