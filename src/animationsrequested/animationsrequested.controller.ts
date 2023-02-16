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
import { AuthGuard } from '@nestjs/passport';
import { GetCustomer } from 'src/auth/get-user.decorator';
import { Customer } from 'src/customers/entities/customer.entity';
import { AnimationsrequestedService } from './animationsrequested.service';
import { CreateAnimationsrequestedDto } from './dto/create-animationsrequested.dto';
import { UpdateAnimationsrequestedDto } from './dto/update-animationsrequested.dto';

// le useGuard "AuthGuard" permet de donner acces aux requetes uniquement au personnes connecté !
// et également d'utiliser le GetCustomer
@UseGuards(AuthGuard())
@Controller('animationsrequested')
export class AnimationsrequestedController {
  constructor(
    private readonly animationsrequestedService: AnimationsrequestedService,
  ) {}

  @Post()
  create(
    @Body() createAnimationsrequestedDto: CreateAnimationsrequestedDto,
    @GetCustomer() customer: Customer,
  ) {
    // console.log(customer, 'customer dans le controller animation');
    return this.animationsrequestedService.create(
      createAnimationsrequestedDto,
      customer,
    );
  }

  @Get()
  findAll() {
    return this.animationsrequestedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animationsrequestedService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimationsrequestedDto: UpdateAnimationsrequestedDto,
    @GetCustomer() customer: Customer, // Ceci permettra de ne pas mélanger les customer.
  ) {
    console.log(customer, 'customer dans le controller animation');
    return this.animationsrequestedService.update(
      id,
      updateAnimationsrequestedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animationsrequestedService.remove(id);
  }
}
