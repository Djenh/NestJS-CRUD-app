import { Injectable } from '@nestjs/common';
/* import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto'; */
import { Employe, Prisma } from 'generated/prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployesService {
	constructor(private readonly databaseService: DatabaseService) {}

	async create(
		createEmployeDto: Prisma.EmployeCreateInput,
	): Promise<Employe> {
		return this.databaseService.employe.create({
			data: createEmployeDto,
		});
	}

	async findAll(role?: 'USER' | 'EDITOR' | 'ADMIN'): Promise<Employe[]> {
		if (role) {
			return this.databaseService.employe.findMany({
				where: { role },
			});
		}

		return this.databaseService.employe.findMany();
	}

	async findOne(id: number): Promise<Employe> {
		return this.databaseService.employe.findUnique({
			where: { id },
		});
	}

	async update(
		id: number,
		updateEmployeDto: Prisma.EmployeUpdateInput,
	): Promise<Employe> {
		return this.databaseService.employe.update({
			where: { id },
			data: updateEmployeDto,
		});
	}

	async remove(id: number): Promise<Employe> {
		return this.databaseService.employe.delete({
			where: { id },
		});
	}
}
