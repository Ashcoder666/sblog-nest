
export class CreateUserDto {
    readonly fullname: string;
    readonly email: string;
    readonly password: string;
    readonly city: string;
    readonly verified : boolean;
}