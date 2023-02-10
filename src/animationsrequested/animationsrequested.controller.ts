import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimationsrequestedService } from './animationsrequested.service';
import { CreateAnimationsrequestedDto } from './dto/create-animationsrequested.dto';
import { UpdateAnimationsrequestedDto } from './dto/update-animationsrequested.dto';

@Controller('animationsrequested')
export class AnimationsrequestedController {
  constructor(
    private readonly animationsrequestedService: AnimationsrequestedService,
  ) {}

  @Post()
  create(@Body() createAnimationsrequestedDto: CreateAnimationsrequestedDto) {
    return this.animationsrequestedService.create(createAnimationsrequestedDto);
  }

  @Get()
  findAll() {
    return this.animationsrequestedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.animationsrequestedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateAnimationsrequestedDto: UpdateAnimationsrequestedDto,
  ) {
    return this.animationsrequestedService.update(
      +id,
      updateAnimationsrequestedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.animationsrequestedService.remove(+id);
  }
}
