const db = require('../../data/db-config');
const vinValidator = require('vin-validator');
const {
  getAll,
  getById,
  create
} = require('./cars-model');

const checkCarId = async (req, res, next) => {
  try{
    const id = req.params.id;
    const car = await getById(id).first()
    if(!car) {
      next({status: 404, message: `car with id ${id} is not found`})
    } else {
      req.car = car;
      next();
    }
  } catch(err) {
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage} = req.body;
  let missing = ''
  if(!vin) missing = 'vin'
  if(!make) missing = 'make'
  if(!model) missing = 'model'
  if(!mileage) missing = 'mileage'
  if(missing) {
    next({status: 400, message: `${missing} is missing`})
  } else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  const {vin} = req.body;
  const isValidVin = vinValidator.validate(vin);
  if(!isValidVin) {
    next({status: 400, message: `vin ${vin} is invalid`});
  } else {
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const {vin} = req.body;
    const match = await db('cars').where('vin', vin);
    if(match) {
      next({status: 400, message: `vin ${vin} already exists`})
    } else {
      next();
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
