const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Attributes to create a category:
// Name: String
// Image: URL
// Description: String
// Tax Applicability: Boolean
// Tax: Number, if applicable
// Tax type

const categorySchema = new Schema({
    name: { type: String , require : true ,unique : true },
    description: { type: String },
    image : {type : String},
    tax_applicability : {type : Boolean , default : false},
    tax : {type : Number},
    tax_type : {type : String},
    status: { type: String, enum: ['active', 'in-active'], default:'active' },
}, { timestamps: true }
);



module.exports = mongoose.model("Category", categorySchema);

