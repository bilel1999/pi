var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
  nom: String,
  prenom: String,
  mail: String,
  age: Number,
  sex: String,
  weight: Number,
  photo: String,
  location: String,
  speciality: String,
  chronicDisease: {
    type: Boolean,
    default: false,
  },
  ecgSignal: {
    type: [Number],
    default: [],
  },
  role:String,
  numero: String,
  password: String,
  token: {
    type: String,
  },
  resetToken: {
    type: String,
  },
});

module.exports = mongoose.model("user", User);
