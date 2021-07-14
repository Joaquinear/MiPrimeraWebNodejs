const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index.html',{title: 'firts website'});
    //res.sendFile(path.join(__dirname,'views/index.html'));
});


router.get('/contact',(req,res) =>{
    res.render('contact.html',{title: 'contact page'});
    //res.sendFile(path.join(__dirname,'views/index.html'));
});
module.exports = router;