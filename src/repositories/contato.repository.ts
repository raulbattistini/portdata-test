import Contato from "../entities/contato";
import connection from "../database/connection";
import { Repository } from "typeorm";
import { AppError } from "../errors/app-error";

class ContatoRepository {
  private repository: Repository<Contato>
  constructor() {
    this.repository = connection.getRepository(Contato)
  }
  async findAll() {
    return await this.repository.find()
  }
  async findById(id: Contato["id"]) {
    return await this.repository.findOneBy({ id })
  }
  async create(contato: Omit<Contato, "id">) {
    const savedContato = this.repository.create(contato)
    return await this.repository.save(savedContato);
  }
  async updateContato(id: Contato["id"], contato: Omit<Contato, "id">) {
    await this.repository.update({ id }, contato)
    return await this.repository.findOneBy({ id })
  }
  async delete(id: Contato["id"]) {
    const contato = await this.repository.findOneBy({ id });
    if (!contato) {
      throw new AppError("contato not found", 404)
    }
    await this.repository.remove(contato)
    return void 0;
  }
}


export default ContatoRepository
