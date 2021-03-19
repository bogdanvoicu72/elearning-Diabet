let express = require('express');
let router = express.Router();



router.get('/',(req,rest)=>{
    rest.render('diabetul.ejs');
});


module.exports = router;