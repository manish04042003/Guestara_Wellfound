const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const subCategorySchema = new Schema({
    name: { type: String , require : true, unique : true },
    description: { type: String },
    image : {type : String},
    category : { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
    tax_applicability : {type : Boolean , default : false},
    tax : {type : Number},
    tax_type : {type : String},
    status: { type: String, enum: ['active', 'in-active'], default:'active' },
}, { timestamps: true }
);



module.exports = mongoose.model("subcategory", subCategorySchema);

