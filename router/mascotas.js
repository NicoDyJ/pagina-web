const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("mascotas", {titulo: "mascotas", 
        arrayMascotas: [
            {id: 'idtula', nombre: 'tula', descripcion: 'descripcion tula'},
            {id: 'idchucha', nombre: 'chucha', descripcion: 'descripcion chucha'},
        ]}
    )
})

module.exports = router;