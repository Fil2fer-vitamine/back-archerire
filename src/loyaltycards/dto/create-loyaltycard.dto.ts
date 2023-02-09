import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
} from '@nestjs/class-validator';

export class CreateLoyaltycardDto {
  //------------ CARD_NUMBER - Formattage par le biais de class-validator---------------
  @MaxLength(5, {
    message: 'Votre numéro de téléphone doit comporter cinq chiffres.',
  })
  @IsNumber()
  @IsPositive({
    message:
      'Votre numéro de carte de fidélité ne doit comporter que cinq chiffres',
  })
  card_number: number;

  //------------ NUMBER_POINTS - Formattage par le biais de class-validator---------------
  @IsNumber()
  @IsPositive({
    message: 'Votre nombre de points doit être strictement positif',
  })
  number_of_points: number;
}
