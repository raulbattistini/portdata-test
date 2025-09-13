import ContatoRepository from "../repositories/contato.repository";
import Contato from "../entities/contato";
import { AppError } from "../errors/app-error";

class ContatoService {
  private repository: ContatoRepository;
  constructor() {
    this.repository = new ContatoRepository()
  }
  async findAll() {
    return this.repository.findAll();
  }
  async findById(id: Contato["id"]) {
    const contato = await this.repository.findById(id);
    if (!contato) {
      throw new AppError("Contato not found", 404)
    }
    return contato
  }
  async create(contato: Contato) {
    return this.repository.create(contato);
  }
  async update(id: Contato["id"], contato: Omit<Contato, "id">) {
    await this.repository.updateContato(id, contato);
    return await this.repository.findById(id);
  }
  async delete(id: Contato["id"]) {
    return this.repository.delete(id);
  }
}
export default ContatoService;
