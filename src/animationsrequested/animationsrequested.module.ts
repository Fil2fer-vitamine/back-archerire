import { Module } from '@nestjs/common';
import { AnimationsrequestedService } from './animationsrequested.service';
import { AnimationsrequestedController } from './animationsrequested.controller';

@Module({
  controllers: [AnimationsrequestedController],
  providers: [AnimationsrequestedService]
})
export class AnimationsrequestedModule {}
