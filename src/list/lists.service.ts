import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {

    constructor(
        @InjectRepository(List)
        private readonly repository: Repository<List>,
    ) { }

    async getAll(): Promise<List[]> {
        return await this.repository.find();
    }
}
