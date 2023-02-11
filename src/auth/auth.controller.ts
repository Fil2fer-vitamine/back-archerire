import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';

@Controller('auth') // http://localhost:8080/auth/
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register') // http://localhost:8080/api/auth/register/
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.registerCustomer(createCustomerDto);
  }
  @Post('login') // http://localhost:8080/api/auth/login/
  async login(
    @Body() loginCustomerDto: LoginCustomerDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.loginCustomer(loginCustomerDto);
  }
}
