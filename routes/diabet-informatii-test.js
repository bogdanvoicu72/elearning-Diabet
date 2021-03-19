const express = require('express');
const router = express.Router();




router.get('/',(req,res)=>{
    res.render('diabet-informatii-test.ejs');
});


module.exports = router;


