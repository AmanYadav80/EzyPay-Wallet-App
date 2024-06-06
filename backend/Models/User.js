const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const UserSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
    }
}); 

//generating the hashed password form the entered password
UserSchema.methods.generateHash=async function (password){
    const saltRounds=12;
    const salt=await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password,salt);
}

//validating the hashed  password with the password entered by the user
UserSchema.methods.validatePassword=async function(givenPassword){
    return await bcrypt.compare(givenPassword,this.password_hash);
}

const User=mongoose.model('User',UserSchema);
module.exports=User;