import { Request, Response } from "express";
import ContatoService from "../services/contato.service";

class ContatoController {
  private service: ContatoService;
  constructor() {
    this.service = new ContatoService();
  }
  findAll = async (req: Request, res: Response) => {
    const contatos = await this.service.findAll();
    res.status(200).json(contatos);
  };

  findById = async (req: Request, res: Response) => {
    // @ts-expect-error
    const contato = await this.service.findById(req.params.id);
    res.status(200).json(contato);
  };

  create = async (req: Request, res: Response) => {
    const contato = await this.service.create(req.body);
    res.status(201).json(contato);
  };

  update = async (req: Request, res: Response) => {
    const contato = await this.service.update(req.params.id as any, req.body);
    res.status(200).json(contato);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id as any);
    res.status(204).send();
  };

}
export default ContatoController;
