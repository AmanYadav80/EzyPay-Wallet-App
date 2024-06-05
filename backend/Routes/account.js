const express=require('express');
const { getAccountBalance } = require('../Controllers/accountController');
const authMiddleware = require('../middlwares/authMiddleware');
const router=express.Router();

router.get('/balance',authMiddleware,getAccountBalance);

router.post('/transfer',authMiddleware,)

module.exports=router;