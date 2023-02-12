import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
} from '@nestjs/class-validator';

export class CreateLoyaltycardDto {
  //------------ CARD_NUMBER - Formatage par le biais de class-validator---------------
  // @MaxLength(5, {
  //   message: 'Votre numéro de carte doit comporter cinq chiffres. Philippe',
  // })
  // @IsNumber()
  // @IsPositive({
  //   message:
  //     'Votre numéro de carte de fidélité ne doit comporter que cinq chiffres',
  // })
  card_number: number;

  //------------ NUMBER_POINTS - Formatage par le biais de class-validator---------------
  // @IsNumber()
  // @IsPositive({
  //   message: 'Votre nombre de points doit être strictement positif',
  // })
  number_of_points: number;
}
