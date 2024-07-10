import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'], // esto es para que solo acepte peticiones con los headers que se le pasen en el arreglo
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // esto es para que solo acepte los metodos que se le pasen en el arreglo
    preflightContinue: false, // esto es para que no haga prefligth en las peticiones eso quiere decir que no haga una peticion de tipo options
  });
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
