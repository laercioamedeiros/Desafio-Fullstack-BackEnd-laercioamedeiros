import "reflect-metadata";
import "dotenv/config";
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/*.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "./migrations/*.{js,ts}");

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }
  
  return {
    type: "postgres",
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT!),
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [User, Contact],
    migrations: [migrationsPath],
  };
};

const dataSourceConfig = setDataSourceConfig();

const AppDataSource = new DataSource(dataSourceConfig);

export default  AppDataSource