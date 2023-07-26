import { Request, Response } from "express";
import { validationResult } from "express-validator";
import prisma from "../..";

const controllers = {
  readAll: async (req: Request, res: Response) => {
    try {
      const result = await prisma.alimento.findMany();
      return res.json(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  readOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await prisma.alimento.findUnique({
        where: { id: Number(id) },
      });
      return res.json(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await prisma.alimento.create({
        data: req.body,
      });
      return res.json(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const result = await prisma.alimento.delete({
        where: {
          id: Number(id),
        },
      });
      return res.json(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

export default controllers;
