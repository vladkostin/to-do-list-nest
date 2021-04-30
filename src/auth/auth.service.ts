import { Injectable } from '@nestjs/common';
import { RegistrationDTO } from './dto/registrationDTO';
import { TokenViewModel } from './view/tokenViewModel';
import { compareSync, hash } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/loginDTO';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly tokenService: JwtService) { }

    async register(data: RegistrationDTO): Promise<TokenViewModel> {
        const user = await this.userService.getByEmail(data.email);
        if (user) {
            throw new Error('A user with this email already exists.');
        }

        const passwordHash = await hash(data.password, 12);

        const dbUser = await this.userService.create(data, passwordHash);

        const tokenViewModel = this.generateToken(dbUser);

        return tokenViewModel;
    }
    generateToken(user: User): TokenViewModel {
        const payload = { username: user.username, sub: user.id };
        const tokenViewModel = new TokenViewModel();
        tokenViewModel.token = this.tokenService.sign(payload);
        return tokenViewModel;

    }
    async login(loginDTO: LoginDTO): Promise<TokenViewModel> {
        const user = await this.userService.getByEmail(loginDTO.email);
        if (!user) {
            throw new Error('A user with this email already exists.');
        }
        const isPasswordValid = compareSync(loginDTO.password, user.passwordHash);
        if (!isPasswordValid) {
            throw new Error('Incorrect password.')
        }
        const tokenViewModel = this.generateToken(user);

        return tokenViewModel;
    }
}
