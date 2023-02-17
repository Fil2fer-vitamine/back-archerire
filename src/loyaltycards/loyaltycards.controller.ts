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

@Controller('loyaltycards') // http://localhost:8080/api/loyaltycards
export class LoyaltycardsController {
  constructor(private readonly loyaltycardsService: LoyaltycardsService) {}

  @Post() // http://localhost:8080/api/loyaltycards
  create(@Body() createLoyaltycardsDto: CreateLoyaltycardDto) {
    console.log('controller dto :', createLoyaltycardsDto);
    return this.loyaltycardsService.create(createLoyaltycardsDto);
  }

  @Get() // http://localhost:8080/api/loyaltycards
  findAll() {
    console.log('find all');
    return this.loyaltycardsService.findAllLoyaltycards();
  }

  @Get(':id') // http://localhost:8080/api/loyaltycards
  findOne(@Param('id') id: string) {
    return this.loyaltycardsService.findOneLoyaltycards(id);
  }

  // @Post()
  // create(@Body() createLoyaltycardDto: CreateLoyaltycardDto) {
  //   if (!createLoyaltycardDto.card_number)
  //     throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  //   return this.loyaltycardsService.create(createLoyaltycardDto);
  // }

  @Patch(':id') // http://localhost:8080/api/loyaltycards
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

  @Delete(':id') // http://localhost:8080/api/loyaltycards
  remove(@Param('id') id: string) {
    return this.loyaltycardsService.remove(id);
  }
}
