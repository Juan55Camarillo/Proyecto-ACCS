const express = require('express');
const router = express.Router();
//require('../public/js/horario');

const {isAuthenticated} = require('../helpers/auth');

router.get('/horario/agregar', isAuthenticated, (req, res) =>{
    res.render('horario/nuevo-horario'); 
    
});

router.post('/horario/todos-horarios', isAuthenticated,  (req, res) =>{
    console.log(req.body);
    res.render('horario/todos-horarios');


});

router.get('/horario/horarios', isAuthenticated, (req, res) =>{
    res.render('horario/todos-horarios');
});

module.exports = router; 