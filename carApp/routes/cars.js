var express = require("express");
var router = express.Router();


var carsController = require("../controllers/cars");


/* get all car records in db  */
router.get("/", carsController.getAllCars);

/* create a new car record  */
router.post("/", carsController.createACar);

/* fetch and delete a single car record  */
router.get("/:id/delete", carsController.deleteACar);

/* fetch a single car record prior to its update  */
router.get("/:id/edit", carsController.editACar);

/* update a single car record  */
router.post("/:id/edit", carsController.updateACar);

module.exports = router;