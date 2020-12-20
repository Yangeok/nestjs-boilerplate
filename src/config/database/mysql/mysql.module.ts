import { Global, Module } from '@nestjs/common';

import { MysqlService } from './mysql.service';

@Global()
@Module({
  providers: [
    {
      provide: MysqlService,
      useValue: new MysqlService(
        `.env.${process.env.NODE_ENV || 'development'}`,
      ),
    },
  ],
  exports: [MysqlService],
})
export class MysqlModule {}
