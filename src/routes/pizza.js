import express from "express";
import { getPizza, createPizza, deletePizza, getPizzas, updatePizza } from "../controller/pizza.js";
import { body } from "express-validator";

const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /pizza:
 *   get:
 *     summary: Retourne la liste des pizzas
 *     description: Retourne la liste des pizzas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", getPizzas);

/**
 * @swagger
 * /pizza/{id}:
 *   get:
 *     summary: une pizza en fonction de son id
 *     description: une pizza en fonction de son id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path (url)
 *         required: true
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getPizza);

/**
 * @swagger
 * /pizza:
 *   post:
 *     summary: ajoute une pizza
 *     description: ajoute une pizza
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: body
 *        required: true
 *      - name: base
 *        in: body
 *        required: true
 *      - name: price
 *        in: body
 *        required: true
 *      - name: ingredients
 *        in: body
 *        required: true
 *      - name: description
 *        in: body
 *        required: true
 *      - name: rating
 *        in: body
 *        required: true
 *      - name: available
 *        in: body
 *        required: true
 *      - name: size
 *        in: body
 *        required: true
 *      - name: allergens
 *        in: body
 *        required: true
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
// POST http://localhost:3001/pizza
router.post("/", [body("name").trim().isLength({ max: 255, min: 2 }), body("price").trim().isFloat({ min: 0, max: 10000 })], createPizza);

/**
 * @swagger
 * /pizza:
 *   put:
 *     summary: modifie une pizza
 *     description: modifie une pizza
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *      - name: id
 *        in: path (url)
 *        required: true
 *      - name: name
 *        in: body
 *        required: true
 *      - name: base
 *        in: body
 *        required: true
 *      - name: price
 *        in: body
 *        required: true
 *      - name: ingredients
 *        in: body
 *        required: true
 *      - name: description
 *        in: body
 *        required: true
 *      - name: rating
 *        in: body
 *        required: true
 *      - name: available
 *        in: body
 *        required: true
 *      - name: size
 *        in: body
 *        required: true
 *      - name: allergens
 *        in: body
 *        required: true
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

// PUT http://localhost:3001/pizza/1
router.put("/:id", updatePizza);

/**
 * @swagger
 * /pizza/{id}:
 *   delete:
 *     summary: supprime une pizza en fonction de son id
 *     description: supprime une pizza en fonction de son id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path (url)
 *         required: true
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
// DELETE http://localhost:3001/pizza/1
router.delete("/:id", deletePizza);

export default router;
