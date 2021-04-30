import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { List } from './entities/list.entity';
import { ListsService } from './lists.service';


@Controller('lists')
export class ListsController {
    constructor(private service: ListsService) { }

    @UseGuards(AuthGuard())
    @Get()
    async getAll(): Promise<List[]> {
        return this.service.getAll();
    }
}