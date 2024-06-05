const express=require("express");
const connectDb = require("./Database/db");
require('dotenv').config();
const rootRouter=require('./Routes/index')
let PORT=process.env.PORT || 3000;
const cors=require('cors');
const app=express();

//cors
app.use(cors());

//middlewares
app.use(express.json());

app.use(express.urlencoded({extended:true}));

//routing
app.use('/api/v1',rootRouter);

//database connection
connectDb();

//port listening
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("Server started at PORT:",3000);
    }
})