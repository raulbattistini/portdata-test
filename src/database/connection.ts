import type { DataSourceOptions } from "typeorm";
import getEnv from "../utils/getEnv";
import { DataSource } from "typeorm";
import Contato from "../entities/contato";

const connectionConfig: DataSourceOptions = {
  type: "mysql",
  host: getEnv("DB_HOST", "localhost"),
  port: parseInt(getEnv("DB_PORT", "3306"), 10),
  username: getEnv("DB_USERNAME", "root"),
  password: getEnv("DB_PASSWORD", "password"),
  database: getEnv("DB_NAME", "mydatabase"),
  synchronize: true,
  logging: false,
  entities: [Contato],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
};

const connection = new DataSource(connectionConfig as any);

export default connection;
