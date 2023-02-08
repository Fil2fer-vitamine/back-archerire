import { PartialType } from '@nestjs/mapped-types';
import { CreateLoyaltycardDto } from './create-loyaltycard.dto';

export class UpdateLoyaltycardDto extends PartialType(CreateLoyaltycardDto) {
  card_number: number;
  number_of_points: number;
}
