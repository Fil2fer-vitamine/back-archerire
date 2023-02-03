import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimationsrequestedDto } from './create-animationsrequested.dto';

export class UpdateAnimationsrequestedDto extends PartialType(CreateAnimationsrequestedDto) {}
