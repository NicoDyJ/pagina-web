const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//direccion statica que inicia el servidor en la carpeta public
app.use(express.static(__dirname + "/public"));

//rutas de la web
app.use('/', require('./router/rutas-web'));

app.use('/mascotas', require('./router/mascotas'));

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
});

//para prender el servidor usamos Nodemon (importante instalarlo de manera global)