import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from '../auth/dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    console.log("Pour la création d'un nouvel utilisateur : ", createCustomerDto);
    return this.customersService.createCustomers(createCustomerDto);
    console.log("Pour la création d'un nouvel utilisateur : ", createCustomerDto);
  }

  // @Get()
  // findAll() {
  //   return this.customersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.customersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() updateCustomerDto: UpdateCustomerDto,
  // ) {
  //   return this.customersService.update(+id, updateCustomerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.customersService.remove(+id);
  // }
}
