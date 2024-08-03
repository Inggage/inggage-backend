const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  person1: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  person2: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  person3: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

module.exports = Cart = mongoose.model("cart", CartSchema);
