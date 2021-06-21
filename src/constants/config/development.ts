import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const DEVELOPMENT_CONFIG = {
  createTestData: true,
  mysql: {
    type: 'mysql',
    host: 'localhost',
    port: 30501,
    username: 'pimba_man',
    password: '12345678',
    database: 'prueba',
    synchronize: true,
    retryDelay: 40000,
    retryAttempts: 3,
    connectTimeout: 40000,
    keepConnectionAlive: false,
    dropSchema: true,
    charset: 'utf8mb4',
    timezone: 'local',
    ssl: false,
  } as TypeOrmModuleOptions,
  mongodb: {
    type: 'mongodb',
    name: 'mongo_conn',
    database: 'prueba',
    dropSchema: true,
    useUnifiedTopology: true,
    synchronize: true,
    password: '12345678',
    username: 'pimba_man',
    host: 'localhost',
    port: 30503,
    authSource: 'admin',
  } as TypeOrmModuleOptions,
};
