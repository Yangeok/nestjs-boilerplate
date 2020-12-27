import { Global, Module } from '@nestjs/common';

import { MysqlService } from './mysql.service';
import { dotEnvOptions } from '../dotenv-options';

@Global()
@Module({
  providers: [
    { provide: MysqlService, useValue: new MysqlService(dotEnvOptions) },
  ],
  exports: [MysqlService],
})
export class MysqlModule {}
