import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
const { User } = require('../src/user/entities/user.entity'); // Adjust path

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: ['dist/db/migrations/*.js'],
  //   entities: ['dist/**/*.entity.d{.ts, .js}'],
  entities: [User],
  logging: false,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
