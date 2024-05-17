const Category = require('../models/category');


const createCategory = async (req, res) => {
    const { name, description, image, tax_applicability, tax, tax_type, status } = req.body;
    let category = new Category({ name, description, image, tax_applicability, tax, tax_type, status });

    await category.save().then(() => {
        res.status(200).json({
            message: "success",
            data: category
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}



const getAllCategory = async (req, res) => {

    await Category.find({}).then((data) => {
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

const getCategoryById = async (req, res) => {
    const _id = req.params.id;
    await Category.find({_id }).then((data) => {
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


const updateCategory = async (req, res) => {
    const _id = req.params.id;
    const updateFields = req.body;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(_id,{ $set: updateFields },{ new: true });
        if (updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { getAllCategory, getCategoryById, createCategory, updateCategory }