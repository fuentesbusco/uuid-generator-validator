// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Import ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable ValidationPipe globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Removes properties that are not defined in the DTO
      forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are present
      transform: true, // Automatically transforms primitive types (e.g., string to number)
    }),
  );

  // Optional: Enable CORS if it will be accessed from different domains
  // app.enableCors();

  await app.listen(3000); // Or your preferred port
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
