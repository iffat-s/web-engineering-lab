// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import dotenv from "dotenv";
// import User from "../entities/User.js";
// import Result from "../entities/Result.js";
// import Product from "../entities/Product.js";
// import UserProduct from "../entities/UserProduct.js";


// dotenv.config();

// const AppDataSource = new DataSource({
//   type: "postgres",
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   synchronize: true,
//   logging: false,
//   entities: [User, Product, UserProduct, Result],
//    migrations: ["src/migrations/*.js"],
//    migrationsTableName: "migrations"
// });

// export default AppDataSource;
import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import User from "../entities/User.js";
import Result from "../entities/Result.js";
import Product from "../entities/Product.js";
import UserProduct from "../entities/UserProduct.js";

// Load appropriate .env file
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV !== 'production', // Auto-create tables in dev/test
  logging: false,
  entities: [User, Product, UserProduct, Result],
  migrations: ["src/migrations/*.js"],
  migrationsTableName: "migrations"
});

export default AppDataSource;