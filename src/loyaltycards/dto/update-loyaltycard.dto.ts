import { IsNumber, IsPositive, MaxLength } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLoyaltycardDto } from './create-loyaltycard.dto';

export class UpdateLoyaltycardDto extends PartialType(CreateLoyaltycardDto) {
  //------------ CARD_NUMBER - Formattage par le biais de class-validator---------------
  @MaxLength(5, {
    message: 'Votre numéro de carte doit comporter cinq chiffres.',
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
