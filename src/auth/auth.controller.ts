import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/loginDTO';
import { RegistrationDTO } from './dto/registrationDTO';

@Controller('api')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('registration')
    async register(@Body() registrationDTO: RegistrationDTO) {
        return await this.authService.register(registrationDTO);
    }
    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        return await this.authService.login(loginDTO);
    }
}
