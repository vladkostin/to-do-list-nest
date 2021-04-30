import { IsEmail, IsNotEmpty, Min } from "class-validator";

export class RegistrationDTO {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Min(8)
    password: string;
}