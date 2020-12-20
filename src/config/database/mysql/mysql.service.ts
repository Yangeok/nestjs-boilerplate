import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface IEnvConfig {
  [key: string]: string;
}

@Injectable()
export class MysqlService {
  private readonly envConfig: IEnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  getTypeORMConfig(): TypeOrmModuleOptions {
    const env = process.env;
    const baseDir = path.join(__dirname, '../../../');
    const entitiesPath = path.join(baseDir, env.DB_ENTITIES);
    const migrationPath = path.join(baseDir, env.DB_MIGRATIONS);

    const type: any = this.envConfig.DB_TYPE;
    return {
      type,
      host: this.envConfig.DB_HOST,
      port: Number.parseInt(this.envConfig.DB_PORT, 10),
      username: this.envConfig.DB_USERNAME,
      password: this.envConfig.DB_PASSWORD,
      database: this.envConfig.DB_DATABASE,
      synchronize: Boolean(this.envConfig.DB_SYNCHRONIZE),
      logging: Boolean(this.envConfig.DB_LOGGING),
      entities: [entitiesPath],
      migrations: [migrationPath],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
      },
    };
  }

  private validateInput(envConfig: IEnvConfig): IEnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('production', 'development', 'test')
        .default('development'),
    }).unknown(true);

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation erorr: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
