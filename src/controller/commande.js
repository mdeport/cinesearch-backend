import Commande from "../models/commande.js";
import Pizza from "../models/pizza.js";
import User from "../models/user.js";
import { validationResult } from "express-validator";

export const createCommande = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  console.log(errors);
  const newCommande = new Commande(bodyContent);
  newCommande
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const getCommandes = (request, response) => {
  Commande.find()
    .then(async (result) => {
      let pizzas = [];
      for (let i = 0; i < result.length; i++) {
        let pizza = result[i].pizzas;
        await Pizza.find({ _id: pizza }).then((result) => {
          pizzas.push(result);
          console.log("result", result);
        });
      }
      let clients = [];
      for (let i = 0; i < result.length; i++) {
        let client = result[i].client;
        await User.find({ email: client }).then((result) => {
          clients.push(result);
        });
      }
      const updateresult = result.map((element, index) => {
        return { ...element._doc, client: clients[index].map((client) => ({ name: client.name, email: client.email, phoneNumber: client.phoneNumber })), pizzas: pizzas[index].map((pizza) => ({ name: pizza.name, base: pizza.base, price: pizza.price, ingredients: pizza.ingredients })) };
      });
      response.status(200).json({ updateresult });
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
