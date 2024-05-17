const express = require('express');
const router = express.Router();


const itemsController = require('../controllers/itemsController');


router.get("/", itemsController.allItems);
router.get("/bycategory/:id", itemsController.getByCategory);
router.get("/bysubcategory/:id", itemsController.getBySubCategory);
router.get("/byname/:name", itemsController.getByName);
router.post("/",itemsController.createItem)
router.get("/:id", itemsController.getById);
router.patch("/:id", itemsController.updateItem);


module.exports = router