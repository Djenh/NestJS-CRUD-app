import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	controllers: [EmployesController],
	providers: [EmployesService],
	imports: [DatabaseModule],
})
export class EmployesModule {}
