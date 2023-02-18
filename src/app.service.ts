import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/**
 * Ce fichier a été laissé pour le fun ... Bonjour Monde !!!
 * Cependant, ... depuis le controller 'app.controller.ts', il n'est jamais appelé ...
 */
