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

@Controller('employes')
export class EmployesController {
	constructor(private readonly employesService: EmployesService) {}

	@Post()
	create(@Body() createEmployeDto: Prisma.EmployeCreateInput) {
		return this.employesService.create(createEmployeDto);
	}

	@Get()
	findAll(@Query('role') role?: 'USER' | 'EDITOR' | 'ADMIN') {
		return this.employesService.findAll(role);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.employesService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateEmployeDto: Prisma.EmployeUpdateInput,
	) {
		return this.employesService.update(+id, updateEmployeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.employesService.remove(+id);
	}
}
