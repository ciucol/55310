import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Principal');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Users for coders')
    .setDescription('The users coders API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  logger.log('Server running at port 3000');
}
bootstrap();
