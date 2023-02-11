/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// ----------------Démarrage de l'application NestJs---------------------------------

async function bootstrap() {
  // Création d'une instance de l'application.
  const app = await NestFactory.create(AppModule);
  // Toutes les URL de l'application débuteront par "api".
  app.setGlobalPrefix('api');
  // Depuis l'utilisation de "await", nous utilisons un écouteur sur le port 8080.
  await app.listen(8080);
}

  // nous utilisons listen(8080) sur l'instance de l'application créée, ce qui démarre le serveur HTTP et configure l'application pour écouter les requêtes entrantes sur le port 8080.

bootstrap();
