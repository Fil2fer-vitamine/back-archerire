/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// ----------------Démarrage de l'application NestJs---------------------------------

async function bootstrap() {
  // Création d'une instance de l'application.
  const app = await NestFactory.create(AppModule);
  // Toutes les URL de l'application débuteront par "api".
  app.setGlobalPrefix('api');

  // Les Pipes permettent de valider, de transformer ou de filtrer des DONNEES entrantes ou sortantes dans une requête HTTP avant traitement par un controller : ici nous vérifions les données saisies par l'utilisateur
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
    }),
  );

  // Depuis l'utilisation de "await", nous utilisons un écouteur sur le port 8080.
  await app.listen(8080);
}

  // nous utilisons listen(8080) sur l'instance de l'application créée, ce qui démarre le serveur HTTP et configure l'application pour écouter les requêtes entrantes sur le port 8080.

bootstrap();
