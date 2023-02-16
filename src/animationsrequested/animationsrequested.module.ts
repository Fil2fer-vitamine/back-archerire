import { Module } from '@nestjs/common';
import { AnimationsrequestedService } from './animationsrequested.service';
// import { AnimationsrequestedController } from './animationsrequested.controller';
import { Animationsrequested } from './entities/animationsrequested.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimationsrequestedController } from './animationsrequested.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Animationsrequested]), AuthModule], //import du authmodule dans le controller pour pouvoir l'utiliser
  controllers: [AnimationsrequestedController],
  providers: [AnimationsrequestedService],
})
export class AnimationsrequestedModule {}
