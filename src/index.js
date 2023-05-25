
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//Middlewares
//Para mostrar la informacion de las peticiones que se le hacen al server
app.use(morgan('dev')); 
//Comprueba si los datos son JSON
app.use(express.json());


//Routes
app.use('/api/historia', require('./routes/historia.routes'));


//Statis files
console.log(__dirname + '/public')
console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));



//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    console.log("Iniciado correctamente :)");

})