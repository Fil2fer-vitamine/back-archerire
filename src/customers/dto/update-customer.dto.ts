import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  readonly name: string;
  readonly firstname: string;
  readonly adress: string;
  readonly postal_code: number;
  readonly city: string;
  readonly phone: string;
  readonly email: string;
}
