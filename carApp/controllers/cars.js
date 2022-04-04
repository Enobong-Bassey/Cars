const pool = require("../models/index");
const carsController = {};


carsController.getAllCars = function (req, res, next) {
  // get all cars from database
  pool.query("SELECT * FROM BlackforceprojectEnobong", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("cars", { carsLists: results.rows });
  });
};


carsController.createACar = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  // create a new car in the database
  pool.query(
    `INSERT INTO BlackforceprojectEnobong(MANUFACTURER, MODEL, COLOR, YEAR) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      if (error) {
        throw error;
      }
      return res.redirect("/cars");
    }
  );
};


carsController.deleteACar = function (req, res, next) {

  // get resource id
  const id = req.params.id;

  // delete a single car from database
  pool.query(
    "DELETE FROM BlackforceprojectEnobong WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};


carsController.editACar = function (req, res, next) {

 // get resource param
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceprojectEnobong WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carEdit", { carsLists: results.rows[0] });
    }
  );
};

carsController.updateACar = function (req, res, next) {

  // get resource params
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceprojectEnobong SET manufacturer = $1, model = $2, color = $3, year = $4 WHERE id = $5",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};

module.exports = carsController;
