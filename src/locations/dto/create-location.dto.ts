import { IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';

export class CreateLocationDto {
  //------------ VILLAGE_NAME - Formatage par le biais de class-validator-----------
  // @IsNotEmpty({ message: "Merci de saisir le village, s'il vous plait." })
  // @IsString({
  //   message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  // })
  // @MinLength(1, { message: 'Le village doit comporter plusieurs caractères.' })
  // name: string;
  village_name: string;

  //------------ DISTANCE_IN_KILOMETERS - Formatage par le biais de class-validator-----------
  // @IsNotEmpty({ message: "Merci de saisir la distance qu'il y a depuis Fresnoy-en-Thelle, s'il vous plait." })
  // @IsString({
  //   message: "Votre réponse ne devrait comporter qu'une chaine de caractères - ex: 15,20.",
  // })
  // @MinLength(1, { message: 'La distance en kilomètres doit comporter plusieurs caractères.' })
  // name: string;
  distance_in_kilometers: string;
}
