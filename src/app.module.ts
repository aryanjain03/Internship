import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { usersController } from './src/users/src/users.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, usersController],
  providers: [AppService],
})    
export class AppModule {}
