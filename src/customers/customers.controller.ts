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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from '../auth/dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetCustomer } from 'src/auth/get-user.decorator';

@Controller('customers')
// @UseGuards(AuthGuard('Jwt'))
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAllCustomer();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOneCustomer(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @GetCustomer() custumer: Customer,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(
      id,
      updateCustomerDto,
      custumer,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
