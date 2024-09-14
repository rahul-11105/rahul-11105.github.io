const express = require('express');
const path = require("path");
const data = require('./model/data');
const Route = require('./routes/route');
const PORT = process.env.PORT || 10000;
const app = express();
//middlewares
app.use(express.static('public'))
//DB connection;
const main = require('./connection/connect');

main("mongodb+srv://rahullokhande11105:rahul%4011105@cluster0.o9dz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res)=>{
    console.log("mongoDB connected successfully");
})
.catch((err)=>{
    console.log("mogoDB connection Error");
});

//view setting 
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));

//routes;
app.use('/',Route);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });