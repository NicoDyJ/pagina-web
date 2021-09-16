const express = require('express');
const app = express();

const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//direccion statica que inicia el servidor en la carpeta public
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", {titulo: "pagina de inicio"})
})

app.get('/ayuda', (req, res) => {
    res.render("ayuda", {titulo: "ayuda"})
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})

//para prender el servidor usamos Nodemon (importante instalarlo de manera global)