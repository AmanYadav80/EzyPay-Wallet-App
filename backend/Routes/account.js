const express=require('express');
const { getAccountBalance, transferBalance } = require('../Controllers/accountController');
const authMiddleware = require('../middlwares/authMiddleware');
const router=express.Router();

router.get('/balance',authMiddleware,getAccountBalance);

router.post('/transfer',authMiddleware,transferBalance);
// transferBalance({
//     userId: "66617de9e3a82d35167565d4",
//     body: {
//         to: "66617e04e3a82d35167565da",
//         amount: 100
//     }
// })

// transferBalance({
//     userId: "65ac44e10ab2ec750ca666a5",
//     body: {
//         to: "65ac44e40ab2ec750ca666aa",
//         amount: 100
//     }
// })
module.exports=router;