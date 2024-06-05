const express=require('express');
const router=express.Router();
const  userValidate  = require('../middlwares/userValidate');
const { userSchema } = require('../validators/userSchema');
const { createUser, verifyUser, updateUser } = require('../Controllers/userController');
const { default: authMiddleware } = require('../middlwares/authMiddleware');

router.post('/signup',userValidate(userSchema),createUser);

router.post('/signin',verifyUser);


router.put('/',authMiddleware,updateUser);
module.exports=router;