// STRETCH
 exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
      {vin: "5YJSA1DG9DFP14705", make: "Honda", model: "Accord", mileage: 98000, title: "salvage", transmission: "manual"},
      {vin: "2EIEW5DM0IRE72840", make: "Hyndai", model: "Elantra", mileage: 120000, title: "clean", transmission: "automatic"},
      {vin: "9MXJA8IW7OCA84536", make: "Nissan", model: "Pathfinder", mileage: 100000, title: "clean"},
      {vin: "3HXEQ7DC3MJV73219", make: "Chevrolet", model: "Silverado", mileage: 180000, title: "rebuilt"},
      {vin: "5NTIE8MR2KFU85784", make: "Mercedes", model: "Benz", mileage: 65000, transmission: "automatic"},
    ]);
  };