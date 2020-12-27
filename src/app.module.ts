import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app.module';
import { MysqlModule } from './config/database/mysql/mysql.module';
import { RoutesControllers, RoutesServices } from './routes'

@Module({
  imports: [AppConfigModule, MysqlModule],
  controllers: [AppController, RoutesControllers],
  providers: [AppService, RoutesServices],
})
export class AppModule {}
