import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationDTO } from 'src/auth/dto/registrationDTO';
import { MongoRepository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly repository: MongoRepository<User>
    ) { }

    async getAll(): Promise<User[]> {
        return await this.repository.find();
    }
    
    async getByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email });
    }
    async create(data: RegistrationDTO, passwordHash: string): Promise<User> {
        let user = this.repository.create({ email: data.email, username: data.username, passwordHash });
        await this.repository.save(user);
        return user;
    }
}

