const express= require('express');
const router= express.Router();

//Task1
router.get('/task1',(req,res) => res.render('task1'));

//Task2
router.get('/task2',(req,res) => res.render('task2'));

//Task submission
router.post('/task1',(req,res) =>{
    console.log(req.body);
    const{ name, email} = req.body;
    let errors= [];

    //Check all fields
    if(!name || !email){
        errors.push({msg: "Please fill all the Fields"});
    }
 
});


module.exports = router;