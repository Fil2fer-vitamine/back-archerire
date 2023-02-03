/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoyaltycardsModule } from './loyaltycards/loyaltycards.module';
import { CustomersModule } from './customers/customers.module';
import { AnimationsrequestedModule } from './animationsrequested/animationsrequested.module';
import { LocationsModule } from './locations/locations.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    LoyaltycardsModule,
    CustomersModule,
    AnimationsrequestedModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
