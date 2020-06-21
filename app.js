const express = require('express');
const app = express();
const controller = require('./routes/controller');
const path = require('path');

app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');


app.use('/',controller)








app.listen(3000,(req,res)=>{
    console.log("Succesfully running on PORT 3000")
})