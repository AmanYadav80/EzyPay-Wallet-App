const jwt=require('jsonwebtoken');
require('dotenv').config();
const authMiddleware=(req,res,next)=>{
   const headers=req.headers['authorization'];
   const array=headers.split(' ');
   const token=array[1];
   if(!token){
    res.status(401).json({
        msg:"JWT token is missing",
    })
   }
   jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
      if(err){
        res.status(403).json({
            msg:"Invalid Access",
        })
      }
      req.userId=decoded.userId;
      next();
   })
}
export default authMiddleware;