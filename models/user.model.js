const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  { 
    email: { type:String, required: true, unique: true },   
    nombre: { type:String, required: true },
    password: { type:String, required: true },    
    foto: { type:String }    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);