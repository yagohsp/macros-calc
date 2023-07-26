import { body, param } from "express-validator";

const validators = {
  create: [
    body("nome").escape().not().isEmpty().withMessage("Nome obrigatório"),
    body("carboidratos")
      .escape()
      .not()
      .isEmpty()
      .withMessage("Campo obrigatório"),
    body("lipideos").escape().not().isEmpty().withMessage("Campo obrigatório"),
    body("proteinas").escape().not().isEmpty().withMessage("Campo obrigatório"),
    body("kcal").escape().not().isEmpty().withMessage("Campo obrigatório"),
  ],
  readOne: [
    param("id").escape().not().isEmpty().withMessage("Campo obrigatório"),
  ],
  delete: [
    param("id").escape().not().isEmpty().withMessage("Campo obrigatório"),
  ],
};

export default validators;
