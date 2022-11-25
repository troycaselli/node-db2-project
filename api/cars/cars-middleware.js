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

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
