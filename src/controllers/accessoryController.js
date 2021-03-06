const express = require('express');

const router = express.Router();

const accessoryService = require('../services/accessoryService.js')

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    let { name, description, imageUrl } = req.body;

    await accessoryService.create(name, description, imageUrl)

    res.redirect('/');
})

module.exports = router;