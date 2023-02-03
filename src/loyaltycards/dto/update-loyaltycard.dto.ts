import { PartialType } from '@nestjs/mapped-types';
import { CreateLoyaltycardDto } from './create-loyaltycard.dto';

export class UpdateLoyaltycardDto extends PartialType(CreateLoyaltycardDto) {}
