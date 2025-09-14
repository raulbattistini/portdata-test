1. Descrição do Projeto

Aplicação Node.js em TypeScript usando TypeORM para gerenciar a entidade `Contato`.

- Tabela: `contato`

- Campos:

      - id (string/UUID, chave primária)

      - nome (string)

      - telefone (string)

Este projeto é uma API simples, apenas para demonstrar CRUD básico com Node + MySQL.

2. Pré-requisitos

-- Node.js >= 18

-- Yarn ou npm

-- MySQL rodando localmente ou remotamente

3. Configuração do Banco de Dados

3.1. Acesse o MySQL:

```bash 
mysql -u root -p
```


3.2. Crie o banco de dados:

```sql
CREATE DATABASE port_louis_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```


3.3. (Opcional) Crie um usuário específico:

```sql
CREATE USER 'port_louis_user'@'localhost' IDENTIFIED BY 'sua_senha';
GRANT ALL PRIVILEGES ON port_louis_db.* TO 'port_louis_user'@'localhost';
FLUSH PRIVILEGES;
```


3.4. Configure o arquivo `.env` com os valores corretos:

```bash 
DB_NAME=port_louis_db
DB_HOST=localhost
DB_USERNAME=port_louis_user
DB_PASSWORD=sua_senha
DB_PORT=3306
PORT=3333
```
> Você pode usar o .env.sample como referência.

4. Instalação
```bash 
# Instalar dependências
yarn install
# ou
npm install
```

5. Rodando o projeto
```bash 
# Ambiente de desenvolvimento
yarn dev
# ou
npm run dev
```


O servidor escutará na porta definida no arquivo `.env` (variável `PORT`).

As tabelas serão sincronizadas automaticamente pelo TypeORM (`synchronize: true`) apenas em dev.

6. Estrutura do Projeto
```bash 
src/
├─ entities/       # Definição da entidade Contato
├─ database/       # Configuração do DataSource
├─ controllers/    # Recebe requisições e chama services
├─ errors/         # Definição de erros 
├─ repositories/   # CRUD via TypeORM
├─ middlewares/    # Middlewares de requisição 
├─ routes/         # Definição de rotas com Express 
├─ services/       # Lógica de negócio
├─ utils/          # Funções auxiliares, ex: getEnv
├─ validations/    # Parâmetros para validação  
├─ app.ts          # Inicialização da aplicação  
└─ index.ts        # Entrada do servidor

# Arquivos principais na raiz
package.json       # Dependências e scripts
tsconfig.json      # Configuração do TypeScript
.env               # Variáveis de ambiente
.env.sample        # Exemplo de configuração
```

7. Endpoints da API

Os endpoints abaixo foram solicitados no teste técnico e devem estar implementados conforme descrito:

### DELETE /contatos/:id
- **200** → (não aplicável)  
- **204** → Contato removido com sucesso (sem body)  
- **404** → Contato não encontrado  

---

### GET /contatos/:id
- **200** →  
```json
{
  "id": "1c0de44e-be69-465f-bbe1-2e9294e03438",
  "nome": "Fulano Tal",
  "telefone": "+5511953944715"
}
```
- **404** → Contato não encontrado  

---

### GET /contatos
- **200** →  
```json
[
    {
      "id": "1c0de44e-be69-465f-bbe1-2e9294e03438",
      "nome": "Fulano Tal",
      "telefone": "+5511953944715"
    },
    {
      "id": "3ecb6473-e6e0-4e67-9a1d-92c343c89f1b",
      "nome": "Beltrano Etc",
      "telefone": "+5511992905415"
    }
]
```
ou 
```json
[]
```
- **404** → Contato não encontrado  


### POST /contatos
* Body esperado: 
```json
{
  "nome": "Raul Battistini",
  "telefone": "+5511992901242"
}
```
- **201** → Contato criado com sucesso (retorna o objeto criado)
```json
{
  "id": "14faa72e-d57f-4319-b220-8ee08fe61a5a",
  "nome": "Raul Battistini",
  "telefone": "+5511992901242"
}
```
- **400** → Erro de validação 

### PATCH /contatos/:id
* Body esperado: 
```json
{
  "nome": "Raul Battistini",
  "telefone": "+5511992901242"
}
```
- **200** → Contato criado com sucesso (retorna o objeto criado) 
```json
{
  "id": "14faa72e-d57f-4319-b220-8ee08fe61a5a",
  "nome": "Raul Battistini",
  "telefone": "+5511992901242"
}
```
- **404** → Contato não encontrado  

## Erros globais
- **500** → 
```json
{ "error": "Internal server error" } 
```
