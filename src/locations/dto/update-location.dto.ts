import { IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  //------------ VILLAGE_NAME - Formattage par le biais de class-validator-----------
  @IsNotEmpty({ message: "Merci de saisir le village, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, { message: 'Le village doit comporter plusieurs caractères.' })
  name: string;
  village_name: string;
}
