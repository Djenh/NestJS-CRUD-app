import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
	ParseIntPipe,
	ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly user_service: UsersService) {}

	@Get() // GET /users
	index(@Query('role') role?: 'EDITOR' | 'ADMIN' | 'USER') {
		return this.user_service.index(role);
	}

	@Get(':id') // GET /users/:id
	show(@Param('id', ParseIntPipe) id: number) {
		return this.user_service.show(id);
	}

	@Post() // POST /users
	store(@Body(ValidationPipe) user: CreateUserDto) {
		return this.user_service.store(user);
	}

	@Put(':id') // PUT /users/:id
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body(ValidationPipe) user: UpdateUserDto,
	) {
		return this.user_service.update(id, user);
	}

	@Delete(':id') // DELETE /users/:id
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.user_service.delete(id);
	}
}
