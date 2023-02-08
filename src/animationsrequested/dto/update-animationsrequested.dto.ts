import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimationsrequestedDto } from './create-animationsrequested.dto';

export class UpdateAnimationsrequestedDto extends PartialType(
  CreateAnimationsrequestedDto,
) {
  readonly date: string;
  readonly kind_of_animation: string;
  readonly number_of_participants: number;
  readonly for_who: string;
  readonly question: string;
  readonly decision_admin: boolean;
  readonly comments_admin: string;
  readonly negociation: string;
}
