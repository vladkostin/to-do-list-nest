import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [UsersModule,JwtModule.register({
    secret: "duighwefjoiwefjwoeifhweioufghweriuoghripuoeqhgioureqwvhilurewhvilurewhvilurewhviluhrewhil",
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
