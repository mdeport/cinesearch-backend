import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commandeSchema = new Schema({
  client: String,
  pizzas: String,
  taille: String,
  quantite: Number,
  status: String,
  date: { type: Date, default: Date.now },
});

export default model("Commande", commandeSchema);
