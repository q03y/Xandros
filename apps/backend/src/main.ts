import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS
  app.enableCors({
    origin: process.env.WEB_URL || 'http://localhost:3001',
    credentials: true,
  });

  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('Xandros API')
    .setDescription('The Xandros Gaming Platform API')
    .setVersion('0.1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication endpoints')
    .addTag('games', 'Game endpoints')
    .addTag('users', 'User endpoints')
    .addTag('library', 'User library endpoints')
    .addTag('community', 'Community endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`✅ Xandros Backend running on http://localhost:${PORT}`);
  console.log(`📚 Swagger API docs available at http://localhost:${PORT}/api/docs`);
}

bootstrap();
