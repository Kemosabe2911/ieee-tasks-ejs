const express= require('express');
const router= express.Router();

//Task Model
const Task = require('../models/Task');

//Task1
router.get('/task1',(req,res) => res.render('task1'));

//Task2
router.get('/task2',(req,res) => res.render('task2'));

//Task submission
router.post('/task1',(req,res) =>{
    console.log(req.body);
    const{ name, email} = req.body;
    let errors= [];
    /*if(!name || !email){
        errors.push({msg: "Please fill all the Fields"});
    }

    if(errors.length>0){
        res.render('tasks',{
            errors,
            name,
            email
        });
    }
    else{
        res.send('Pass');
    }*/
    
});


module.exports = router;