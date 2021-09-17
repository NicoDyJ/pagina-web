const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo: "pagina de inicio"})
});

router.get('/ayuda', (req, res) => {
    res.render("ayuda", {titulo: "ayuda"})
});

module.exports = router;