import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
	private users = [
		{
			id: 1,
			role: 'ADMIN',
			name: 'Baba Moussa',
			email: 'moussa@gmail.com',
			phone: '2290194010203',
		},
		{
			id: 2,
			role: 'USER',
			name: 'Jean DOSSOU',
			email: 'jean@gmail.com',
			phone: '2290194010203',
		},
		{
			id: 3,
			role: 'EDITOR',
			name: 'Anne',
			email: 'anne@gmail.com',
			phone: '2290194010203',
		},
		{
			id: 4,
			role: 'USER',
			name: 'David',
			email: 'david@gmail.com',
			phone: '2290194010203',
		},
	];

	index(role?: 'ADMIN' | 'EDITOR' | 'USER') {
		if (role) {
			const role_tab = this.users.filter((user) => user.role === role);
			if (role_tab.length === 0)
				throw new NotFoundException('Role non trouvé');
			return role_tab;
		}
		return this.users;
	}

	show(id: number) {
		const user = this.users.find((user) => user.id === id);

		if (!user) throw new NotFoundException('Utilisateur non trouvé');

		return user;
	}

	store(user: CreateUserDto) {
		const users_filtred = [...this.users].sort((a, b) => b.id - a.id);

		const new_user = {
			id: users_filtred[0].id + 1,
			...user,
		};

		this.users.push(new_user);
		return new_user;
	}

	update(id: number, updated_user: UpdateUserDto) {
		this.users = this.users.map((user) => {
			if (user.id === id) {
				return { ...user, ...updated_user };
			}
			return user;
		});

		return this.show(id);
	}

	delete(id: number) {
		const del_user = this.show(id);
		this.users = this.users.filter((user) => user.id !== id);

		return del_user;
	}
}
