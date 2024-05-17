const express = require('express');
const router = express.Router();


const subCategoryController = require('../controllers/subcategoryController');

router.get("/", subCategoryController.getAllSubCategory);
router.get("/getbycategory/:id", subCategoryController.getSubCategoryByCategory);
router.get("/:id", subCategoryController.getSubCategoryById);
router.post("/", subCategoryController.createSubCategory);
router.patch("/:id", subCategoryController.updateSubCategory);


module.exports = router