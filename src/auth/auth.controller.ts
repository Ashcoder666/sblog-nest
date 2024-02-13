import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { users } from './schemas/users.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  registerUser(
    @Body()
    user: CreateUserDto,
  ): Promise<users> {
    try {
        return this.authService.createUser(user);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            throw new HttpException('Email address is already in use', HttpStatus.CONFLICT);
          } else {
            // Handle other errors or rethrow the original error
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }
  }
}
