import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsString,
	MinLength,
} from 'class-validator';

export class CreateUserDto {
	@IsEnum(['ADMIN', 'USER', 'EDITOR'], {
		message: 'Role incorrect',
	})
	role: 'ADMIN' | 'USER' | 'EDITOR';

	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	name: string;

	@IsEmail()
	email: string;

	@IsString()
	@MinLength(8)
	phone: string;
}
