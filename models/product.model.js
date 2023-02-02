
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {    
    nombre: { type:String, required: true },
    descripcion: { type:String, required: true },    
    foto: { type:String },
    precio: { type:Number, required: true },    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);