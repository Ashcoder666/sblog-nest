import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from './schemas/users.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'users',schema: usersSchema}])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
