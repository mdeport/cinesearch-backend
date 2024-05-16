import express from "express";
import routes from "./routes/index.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
  });

  app.use("/error", (req, res) => {
    try {
      throw new Error("Une erreur est survenue");
    } catch (error) {}
  });
  return app;
}
