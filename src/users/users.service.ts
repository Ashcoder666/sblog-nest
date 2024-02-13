import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { users } from './schemas/users.schema';
import mongoose from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(users.name)
        private userModel: mongoose.Model<users>
    ){}

    async findAll():Promise<users[]>{
        const users = await this.userModel.find({})
        return users
    }

}
