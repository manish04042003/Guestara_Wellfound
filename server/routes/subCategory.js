const express = require('express');
const router = express.Router();


const subCategoryController = require('../controllers/subcategoryController');
//Get all sub Category
router.get("/", subCategoryController.getAllSubCategory);
// Get All SubCategory in Under Partical Category 
router.get("/getbycategory/:id", subCategoryController.getSubCategoryByCategory);
// Get SubCategory By Its ID 
router.get("/:id", subCategoryController.getSubCategoryById);
// Create New SubCategory 
router.post("/", subCategoryController.createSubCategory);
// Update SubCategory  
router.patch("/:id", subCategoryController.updateSubCategory);


module.exports = router