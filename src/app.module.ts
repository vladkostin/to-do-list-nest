import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListsModule } from './list/lists.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';


@Module({
  providers: [
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'todo',
      entities: ["dist/**/*.entity.js"],
      useUnifiedTopology: true,
    }),
    AuthModule,
    UsersModule,
    ListsModule
  ],
})
export class AppModule {}
