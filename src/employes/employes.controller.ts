import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from '@nestjs/common';
import { EmployesService } from './employes.service';
/* import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto'; */
import { Prisma } from 'generated/prisma/client';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Controller('employes')
export class EmployesController {
	private readonly logger = new MyLoggerService(EmployesController.name);

	constructor(private readonly employesService: EmployesService) {}

	@Post()
	create(@Body() createEmployeDto: Prisma.EmployeCreateInput) {
		this.logger.log('Enregistrer un employé', EmployesController.name);
		return this.employesService.create(createEmployeDto);
	}

	@Get()
	findAll(@Query('role') role?: 'USER' | 'EDITOR' | 'ADMIN') {
		this.logger.log('Liste de tous les employés', EmployesController.name);
		return this.employesService.findAll(role);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		this.logger.log('Détails sur un employé', EmployesController.name);
		return this.employesService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateEmployeDto: Prisma.EmployeUpdateInput,
	) {
		this.logger.log('Mettre à jour un employé', EmployesController.name);
		return this.employesService.update(+id, updateEmployeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		this.logger.log('Supprimé un employé', EmployesController.name);
		return this.employesService.remove(+id);
	}
}
