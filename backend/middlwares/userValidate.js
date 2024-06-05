const userValidate=(userSchema)=>{
    return (req,res,next)=>{
        try {
            req.body=userSchema.parse(req.body);
            next();
        }
        catch(err){
            res.status(400).json({
                msg:err.errors,
            })
        }
    };
};
module.exports=userValidate;