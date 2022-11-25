const express = require('express');
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
  } = require('./cars-middleware');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await Cars.getAll();
    res.status(200).json(result);
})

router.get('/:id', checkCarId, (req, res) => {
    res.status(200).json(req.car);
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