const mongoose=require('mongoose');
require('dotenv').config();
const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log("Error connecting to MongoDB",err);
    }
}
module.exports=connectDb;