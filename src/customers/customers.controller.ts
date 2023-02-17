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
@UseGuards(AuthGuard('jwt'))
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAllCustomer();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('@Param Id ---> Controller : ', id);
    return this.customersService.findOneCustomer(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @GetCustomer() customer: Customer,
  ): Promise<Customer> {
    console.log(
      '--------------CONTROLLER updateCustomerDto - patch() -----------------',
      updateCustomerDto,
    );
    return this.customersService.updateCustomer(
      id,
      updateCustomerDto,
      customer,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @GetCustomer() customer: Customer) {
    console.log(
      '--------------CONTROLLER Customer - delete() -----------------',
      customer,
    );
    return this.customersService.deleteCustomer(id, customer);
  }
}
