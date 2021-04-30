import { IsEmail, IsNotEmpty, Min } from "class-validator";

export class LoginDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Min(8)
    password: string;
}