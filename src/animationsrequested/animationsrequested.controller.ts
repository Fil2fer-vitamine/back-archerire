import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { AuthGuard } from '@nestjs/passport';
import { GetCustomer } from 'src/auth/get-user.decorator';
import { Customer } from 'src/customers/entities/customer.entity';

import { AnimationsrequestedService } from './animationsrequested.service';
import { CreateAnimationsrequestedDto } from './dto/create-animationsrequested.dto';
import { UpdateAnimationsrequestedDto } from './dto/update-animationsrequested.dto';

// le useGuard "AuthGuard" permet de donner acces aux requetes uniquement au personnes connecté !
// et également d'utiliser le GetCustomer
// @UseGuards(AuthGuard())
@Controller('animationsrequested') // http://localhost:8080/api/animationsrequested
export class AnimationsrequestedController {
  constructor(
    private readonly animationsrequestedService: AnimationsrequestedService,
  ) {}

  @Post() // http://localhost:8080/api/animationsrequested
  create(@Body() createAnimationsrequestedDto: CreateAnimationsrequestedDto) {
    return this.animationsrequestedService.create(createAnimationsrequestedDto);
  }

  @Get() // http://localhost:8080/api/animationsrequested
  findAll() {
    return this.animationsrequestedService.findAll();
  }

  @Get(':id') // http://localhost:8080/api/animationsrequested/fe7a0127-dce3-40ac-b1bf-e04df882673f
  findOne(@Param('id') id: string) {
    return this.animationsrequestedService.findOne(id);
  }

  @Patch(':id') // http://localhost:8080/api/animationsrequested/fe7a0127-dce3-40ac-b1bf-e04df882673f
  update(
    @Param('id') idValue: string,
    @Body() updateAnimationsrequestedDto: UpdateAnimationsrequestedDto,
    // @GetCustomer() customer: Customer, // Ceci permettra de ne pas mélanger les customer.
    // console.log(customer, 'customer dans le controller animation');
  ) {
    if (
      !updateAnimationsrequestedDto.date &&
      !updateAnimationsrequestedDto.kind_of_animation &&
      !updateAnimationsrequestedDto.number_of_participants &&
      !updateAnimationsrequestedDto.for_who &&
      !updateAnimationsrequestedDto.question &&
      !updateAnimationsrequestedDto.location // Il y a un problème avec l'association de cette table
    )
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    console.log('updateAnimationsrequestedDto', updateAnimationsrequestedDto);

    return this.animationsrequestedService.update(
      idValue,
      updateAnimationsrequestedDto,
    );
  }

  @Delete(':id') // http://localhost:8080/api/animationsrequested
  remove(@Param('id') id: string) {
    return this.animationsrequestedService.remove(id);
  }
}
