import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations') // http://localhost:8080/api/locations
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post() // http://localhost:8080/api/locations
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Get() // http://localhost:8080/api/locations
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id') // http://localhost:8080/api/locations
  findOne(@Param('id') id: number) {
    return this.locationsService.findOne(+id);
  }

  @Patch(':id') // http://localhost:8080/api/locations
  update(
    @Param('id') id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationsService.update(id, updateLocationDto);
  }

  @Delete(':id') // http://localhost:8080/api/locations
  remove(@Param('id') id: number) {
    return this.locationsService.remove(+id);
  }
}
