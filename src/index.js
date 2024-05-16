import "dotenv/config";
import mongoose from "mongoose";
import { CreateApp } from "./app.js";

console.log("env: ", process.env.MONGO_STRING);

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

const app = CreateApp();

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
