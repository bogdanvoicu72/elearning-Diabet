let express = require('express');
let router = express.Router();
let bodyParser = require("body-parser");
let path = require('path');



router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, 'public')));



router.get('/',(req,res)=>{
    
    res.render('checkanalize.ejs');

    
});


router.post('/',(req,res)=>{
    
        let valoareAnalize1 = req.body.Analiza1;
        let valoareAnalize2 = req.body.Analiza2;
        let valoareAnalize3 = req.body.Analiza3;
        console.log(req.body);

        if(valoareAnalize1 > 10 || valoareAnalize2 > 10 && valoareAnalize3 === 'da'){

           // var glicozuria = "si Glicozuria se afla in urina"
            var mesaj2="si nu sunt bune te rog sa mergi la un specialist. Prima oara te rog fa testul nostru pentru ati stabili un nou regim de viata, testul se afla la cazuri urgente!";
            res.render('checkanalize.ejs', {data1: valoareAnalize1, data2:valoareAnalize2, mesaj2:mesaj2});
        }

       else{
           
           var mesaj2 = "asta inseamna ca esti bine va rog cazul valorilor normale!";
        res.render('checkanalize.ejs', {data1: valoareAnalize1,data2:valoareAnalize2, mesaj2:mesaj2});
       }

        
    
   
})

module.exports = router;