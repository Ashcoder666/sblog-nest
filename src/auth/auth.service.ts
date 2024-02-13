import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { users } from './schemas/users.schema';
import mongoose from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(users.name)
    private userModel: mongoose.Model<users>,
  ) {}

  async createUser(user: users): Promise<users> {
    try {
      const res = await this.userModel.create(user);
      return res;
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
        throw new Error('Email address is already in use');
      } else {
        throw error;
      }
    }
  }
}
