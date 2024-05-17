const express = require('express');
const router = express.Router();


const itemsController = require('../controllers/itemsController');


// Get All Items 
router.get("/", itemsController.allItems);
// Get All Items Under Particular Category By its Id
router.get("/bycategory/:id", itemsController.getByCategory);
// Get All Items Under Particular SubCategory By its Id
router.get("/bysubcategory/:id", itemsController.getBySubCategory);
// Get Item  By its Name 
router.get("/byname/:name", itemsController.getByName);
// Create New Item 
router.post("/",itemsController.createItem)
// Get Item  By its Id
router.get("/:id", itemsController.getById);
// Update Items by its Id
router.patch("/:id", itemsController.updateItem);


module.exports = router