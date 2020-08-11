const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');


//Warning dependencies use only, if is absolutly neccesary
const Handlebars = require ('handlebars');   
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');  
//End Warning
 

//Iniciales
var app = express();
require('./database');
require('./config/passport');


//Configuración
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layout'),
    //Warning dependencies use only, if is absolutly neccesary/method section
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    //End Warning
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secretPassword',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Variables Globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null ;

    next();
});

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/horarios'));
app.use(require('./routes/chats'));


//Servidor
const server = app.listen(app.get('port'), () =>{
    console.log('Servidor en escucha en puerto', app.get('port'))
});


