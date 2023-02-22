import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["./src/shared/infra/typeorm/entities/*{.ts,js}"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.{ts,js}"],
});
