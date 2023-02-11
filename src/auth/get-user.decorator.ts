import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Customer } from 'src/customers/entities/customer.entity';

export const GetCustomer = createParamDecorator(
  (_data, ctx: ExecutionContext): Customer => {
    const req = ctx.switchToHttp().getRequest();
    return req.customer;
  },
);
