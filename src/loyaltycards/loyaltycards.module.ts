import { Module } from '@nestjs/common';
import { LoyaltycardsService } from './loyaltycards.service';
import { LoyaltycardsController } from './loyaltycards.controller';
import { Loyaltycard } from './entities/loyaltycard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Loyaltycard])],
  controllers: [LoyaltycardsController],
  providers: [LoyaltycardsService],
})
export class LoyaltycardsModule {}
