import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { AllExceptionsFilters } from './all-exceptions.filters';
// import { MyLoggerService } from './my-logger/my-logger.service';

dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	/* const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useLogger(app.get(MyLoggerService)); */

	const { httpAdapter } = app.get(HttpAdapterHost);
	app.useGlobalFilters(new AllExceptionsFilters(httpAdapter));

	app.enableCors();
	app.setGlobalPrefix('api');

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
