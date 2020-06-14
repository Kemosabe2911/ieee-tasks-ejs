const express= require('express');
const router= express.Router();

//Welcome Page
router.get('/',(req,res) => res.render('welcome'));

//Tasks Page
router.get('/tasks',(req,res) => res.render('tasks'));

module.exports = router;