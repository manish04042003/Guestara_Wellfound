const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: { type: String , require : true , unique : true },
    description: { type: String },
    image : {type : String},
    category : { type: mongoose.Schema.Types.ObjectId, ref: 'category',require : true },
    tax_applicability : {type : Boolean , default : false},
    tax : {type : Number},
    base_amount : {type : Number},
    discount : {type : Number},
    total_amount : {type : Number}, 
    status: { type: String, enum: ['active', 'in-active'], default:'active' },
}, { timestamps: true }
);

itemsSchema.pre('save', function(next) {
    this.total_amount = this.base_amount - this.discount;
    next();
});



module.exports = mongoose.model("items", itemsSchema);

