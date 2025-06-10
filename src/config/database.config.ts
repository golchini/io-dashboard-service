import { registerAs } from '@nestjs/config';

export const DatabaseConfigName = 'database';

export interface DatabaseConfig {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  minPoolSize: number;
  maxPoolSize: number;
}

export default registerAs(DatabaseConfigName, (): DatabaseConfig => ({
  name: process.env.DB_NAME ?? 'thermotrack',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '27017', 10), 
  user: process.env.DB_USER ?? '',
  password: process.env.DB_USER_PWD ?? '',
  minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE ?? '5', 10),
  maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE ?? '10', 10),
}));