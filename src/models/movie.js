import mongoose from "mongoose";
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  titre: { type: String, required: true },
  année: { type: Number, required: true },
  genre: { type: [String], required: true },
  réalisateur: { type: String, required: true },
  acteurs: { type: [String], required: true },
});

export default model("Movie", movieSchema);
