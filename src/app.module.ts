/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoyaltycardsModule } from './loyaltycards/loyaltycards.module';
import { CustomersModule } from './customers/customers.module';
import { AnimationsrequestedModule } from './animationsrequested/animationsrequested.module';
import { LocationsModule } from './locations/locations.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loyaltycard } from './loyaltycards/entities/loyaltycard.entity';
import { Customer } from './customers/entities/customer.entity';
import { Animationsrequested } from './animationsrequested/entities/animationsrequested.entity';
import { Location } from './locations/entities/location.entity';
import { AuthModule } from './auth/auth.module';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    // parametrage de notre accès à la base de donnée//
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Loyaltycard, Customer, Animationsrequested, Location],
      synchronize: true,
      // synchronize: process.env.POSTGRES_NODE === 'DEV' ? true : false,
    }),
    LoyaltycardsModule,
    CustomersModule,
    AnimationsrequestedModule,
    LocationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
