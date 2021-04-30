import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
    imports: [TypeOrmModule.forFeature([List]),
    PassportModule.register({      
        defaultStrategy: 'jwt',      
        property: 'user',      
        session: false,    
    }),],
    providers: [ListsService],
    controllers: [ListsController],
})
export class ListsModule {}
