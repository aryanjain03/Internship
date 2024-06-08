import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
// import { isNotEmpty, isString } from "decorators";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsEmail()
    email : string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {message : 'Valid role reqruired'})
    role : "INTERN" | "ENGINEER" | "ADMIN";
}