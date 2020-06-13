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
    const{ name, email} = req.body;
    let errors= [];
    if(!name || !email){
        errors.push({msg :'Please fill all the Fields'});
        console.log(errors);
    } 
    else{
        Task.findOne({email: email})
        .then((task) =>{
            if(task){
                errors.push({msg :'Email Id already exist'});
                console.log(errors);
            }
            else{
                const newTaskSubmitted= new Task({
                    name,
                    email
                });
                newTaskSubmitted.save()
                .then( task =>{
                    res.send('Worked');
                })
                .catch(err => console.error(err));
            }
        })
    }
    
});


module.exports = router;