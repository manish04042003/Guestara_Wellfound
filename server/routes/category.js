const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');


// Get All category
router.get("/", categoryController.getAllCategory);
// Get Category bu Its Id
router.get("/:id", categoryController.getCategoryById);
// Create New Category 
router.post("/", categoryController.createCategory);
// Update Category By its Id
router.patch("/:id", categoryController.updateCategory);




module.exports = router