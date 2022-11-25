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

const checkCarPayload = async (req, res, next) => {
  // DO YOUR MAGIC
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
