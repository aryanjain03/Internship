import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Src\usersController } from './src/users/src/users.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, Src\usersController],
  providers: [AppService],
})    
export class AppModule {}
