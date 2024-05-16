import mongoose from "mongoose";
const { Schema, model } = mongoose;

const actorSchema = new Schema({
  nom: { type: String, required: true },
  rôle: { type: String, required: true },
});

const movieSchema = new Schema({
  titre: { type: String, required: true },
  année: { type: Number, required: true },
  genres: { type: [String], required: true },
  réalisateur: { type: String, required: true },
  acteurs: { type: [actorSchema], required: true },
});

export default model("Movie", movieSchema);
