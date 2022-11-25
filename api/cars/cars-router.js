const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await Cars.getAll();
    res.status(200).json(result);
})

// router.get('/:id', (req, res) => {

// })

// router.post('/', (req, res) => {

// })

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message || 'Something went wrong'
    })
})
module.exports = router;