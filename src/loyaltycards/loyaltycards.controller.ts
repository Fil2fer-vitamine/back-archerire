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
  UseGuards,
} from '@nestjs/common';
import { LoyaltycardsService } from './loyaltycards.service';
import { CreateLoyaltycardDto } from './dto/create-loyaltycard.dto';
import { UpdateLoyaltycardDto } from './dto/update-loyaltycard.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('loyaltycards')
export class LoyaltycardsController {
  constructor(private readonly loyaltycardsService: LoyaltycardsService) {}

  @Post()
  create(@Body() createLoyaltycardsDto: CreateLoyaltycardDto) {
    console.log('controller dto :', createLoyaltycardsDto);
    return this.loyaltycardsService.create(createLoyaltycardsDto);
  }

  @Get()
  findAll() {
    console.log('find all');
    return this.loyaltycardsService.findAllLoyaltycards();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltycardsService.findOneLoyaltycards(id);
  }

  // @Post()
  // create(@Body() createLoyaltycardDto: CreateLoyaltycardDto) {
  //   if (!createLoyaltycardDto.card_number)
  //     throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  //   return this.loyaltycardsService.create(createLoyaltycardDto);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoyaltycardDto: UpdateLoyaltycardDto,
  ) {
    console.log(
      '------CONTROLLER----updateLoyaltycardDto-- : ',
      updateLoyaltycardDto,
    );
    if (!updateLoyaltycardDto.number_of_points)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.loyaltycardsService.patch(id, updateLoyaltycardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltycardsService.remove(id);
  }
}
