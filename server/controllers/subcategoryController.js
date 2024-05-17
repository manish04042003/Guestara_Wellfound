const SubCategory = require('../models/subCategory');


const createSubCategory = async (req, res) => {
    const { name, description, image, category, tax_applicability, tax, tax_type, status } = req.body;
    let subCategory = new SubCategory({ name, description, image, category, tax_applicability, tax, tax_type, status });

    await subCategory.save().then(() => {
        res.status(200).json({
            message: "success",
            data: subCategory
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })

}



const getAllSubCategory = async (req, res) => {
    await SubCategory.find({}).then((data) => {
        res.status(200).json({
            message: "success",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    });

}

const getSubCategoryById = async (req, res) => {
    const _id = req.params.id;
    await SubCategory.find({ _id }).then((data) => {
        res.status(200).json({
            message: "success",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    });

}

const getSubCategoryByCategory = async (req, res) => {
    const category = req.params.id;
    await SubCategory.find({ category }).then((data) => {
        res.status(200).json({
            message: "success",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    });

}


const updateSubCategory = async (req, res) => {
    const _id = req.params.id;
    const updateFields = req.body;
    try {
        const updatedCategory = await SubCategory.findByIdAndUpdate(_id, { $set: updateFields }, { new: true });
        if (updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


module.exports = { createSubCategory, getAllSubCategory, getSubCategoryById, updateSubCategory, getSubCategoryByCategory };