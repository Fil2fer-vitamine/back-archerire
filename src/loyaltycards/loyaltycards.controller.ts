import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoyaltycardsService } from './loyaltycards.service';
import { CreateLoyaltycardDto } from './dto/create-loyaltycard.dto';
import { UpdateLoyaltycardDto } from './dto/update-loyaltycard.dto';

@Controller('loyaltycards')
export class LoyaltycardsController {
  constructor(private readonly loyaltycardsService: LoyaltycardsService) {}

  @Post()
  create(@Body() createLoyaltycardDto: CreateLoyaltycardDto) {
    return this.loyaltycardsService.create(createLoyaltycardDto);
  }

  @Get()
  findAll() {
    return this.loyaltycardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltycardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoyaltycardDto: UpdateLoyaltycardDto) {
    return this.loyaltycardsService.update(+id, updateLoyaltycardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltycardsService.remove(+id);
  }
}
