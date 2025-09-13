import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import contatoRouter from "./routes/contato.route"
import { AppError } from "./errors/app-error"
import connection from "./database/connection"


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(contatoRouter)

connection.initialize()
  .then(() => console.log("Database initialized"))
  .catch((err: any) => console.error("Error connecting to database:", err))

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error(err);
  return res.status(500).json({ error: "Internal server error" });
});

export default app
