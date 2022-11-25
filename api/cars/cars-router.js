const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await Cars.getAll();
    res.status(200).json(result);
})

router.get('/:id', async (req, res) => {
    const result = await Cars.getById(req.params.id)
    res.status(200).json(result);
})

router.post('/', async (req, res) => {
    const result = await Cars.create(req.body);
    res.status(201).json(result);
})

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message || 'Something went wrong'
    })
})
module.exports = router;