const express = require('express');
const router = express.Router();

const User = require('../models/User');
const passport = require('passport');

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});
router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/horario/agregar',
    failureRedirect: '/users/signin',
    failureFlash: true
}))

router.post('/users/signup', async (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({ text: 'Porfavor ingrese su nombre' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }
    if (password.length < 4) {
        errors.push({ text: 'La contraseña debería ser mayor de 4 carácteres' });
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors, name, email, password, confirm_password });
    }
    else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'Este correo ya ha esta en uso')
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password });
            await newUser.save();
            req.flash('success_msg', '¡Estas registrado!');
            res.redirect('/users/signin');
        }
    }
});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
module.exports = router;