import { Router, Request, Response, NextFunction } from "express";
import { validateContato } from "../middlewares/validate-contato.middleware";
import { contatoSchema } from "../validations/contato.schema";
import ContatoController from "../controllers/contato.controller";


const contatoRouter = Router();
const contatoController = new ContatoController();

contatoRouter.get("/contatos", contatoController.findAll);
contatoRouter.get("/contatos/:id", contatoController.findById);
contatoRouter.post("/contatos", validateContato(contatoSchema), contatoController.create)
contatoRouter.patch("/contatos/:id", validateContato(contatoSchema), contatoController.update)
contatoRouter.delete("/contatos/:id", contatoController.delete)

export default contatoRouter;
