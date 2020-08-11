var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/accs', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})
  .then(db => console.log('Base de datos randy'))
  .catch(err => console.error(err));
