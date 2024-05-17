const Items = require('../models/items');

const createItem = async (req, res) => {
    const { name, description, image, category, subcategory, tax_applicability, tax, base_amount, discount, status } = req.body;
    let item = new Items({ name, description, image, category, subcategory, tax_applicability, tax, base_amount, discount, status });
    await item.save().then(() => {
        res.status(200).json({
            message: "success",
            data: item
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}



const allItems = async (req, res) => {

    await Items.find({}).then((data) => {
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

const getById = async (req, res) => {
    const _id = req.params.id;
    await Items.find({ _id }).then((data) => {
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


const getByCategory = async (req, res) => {
    const category = req.params.id;
    await Items.find({ category }).then((data) => {
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

const getBySubCategory = async (req, res) => {
    const subcategory = req.params.id;
    await Items.find({ subcategory }).then((data) => {
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

const getByName = async (req, res) => {
    const name = req.params.name;
    await Items.find({ name }).then((data) => {
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

const updateItem = async (req, res) => {
    const _id = req.params.id;
    const updateFields = req.body;
    try {
        const updatedCategory = await Items.findByIdAndUpdate(_id, { $set: updateFields }, { new: true });
        if (updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {createItem,allItems,getById,getByName,getByCategory,getBySubCategory,updateItem};