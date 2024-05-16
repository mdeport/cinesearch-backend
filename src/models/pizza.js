import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pizzaSchema = new Schema({
  name: String,
  base: String,
  price: Number,
  ingredients: [String],
  description: String,
  rating: Number,
  available: Boolean,
  size: [String],
  allergens: [String],
});

export default model("Pizza", pizzaSchema);
