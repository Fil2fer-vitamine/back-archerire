import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoyaltycardsService } from './loyaltycards.service';
import { CreateLoyaltycardDto } from './dto/create-loyaltycard.dto';
import { UpdateLoyaltycardDto } from './dto/update-loyaltycard.dto';

@Controller('loyaltycards')
export class LoyaltycardsController {
  constructor(private readonly loyaltycardsService: LoyaltycardsService) {}

  @Get()
  findAll() {
    return this.loyaltycardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltycardsService.findOneLoyaltycards(id);
  }

  @Post()
  create(@Body() createLoyaltycardDto: CreateLoyaltycardDto) {
    if (!createLoyaltycardDto.card_number)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.loyaltycardsService.create(createLoyaltycardDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoyaltycardDto: UpdateLoyaltycardDto,
  ) {
    if (!updateLoyaltycardDto.card_number)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.loyaltycardsService.patch(id, updateLoyaltycardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltycardsService.remove(id);
  }
}
