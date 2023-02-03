import { Module } from '@nestjs/common';
import { LoyaltycardsService } from './loyaltycards.service';
import { LoyaltycardsController } from './loyaltycards.controller';

@Module({
  controllers: [LoyaltycardsController],
  providers: [LoyaltycardsService]
})
export class LoyaltycardsModule {}
