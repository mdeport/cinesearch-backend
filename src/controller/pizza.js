import Pizza from "../models/pizza.js";
import { validationResult } from "express-validator";

export const getPizzas = (req, res) => {
  Pizza.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const getPizza = (req, res) => {
  const id = req.params.id;
  Pizza.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const createPizza = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  console.log(errors);
  const newPizza = new Pizza(bodyContent);
  newPizza
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const updatePizza = async (request, response) => {
  const id = request.params.id;
  const bodyContent = request.body;
  const pizza = await Pizza.findById(id);
  if (pizza) {
    const res = await Pizza.updateOne(pizza, bodyContent);
    response.json({ id, bodyContent, res });
  } else {
    response.status(404).json({ message: "Pizza not found" });
  }
};

export const deletePizza = async (request, response) => {
  const id = request.params.id;
  const pizza = await Pizza.findById(id);

  if (pizza) {
    const res = await Pizza.deleteOne({ _id: id });
    response.status(204).end();
    response.json({ id, res });
  } else {
    response.status(404).json({ message: "Pizza not found" });
  }
};
