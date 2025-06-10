import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';  // Beispiel DTO importieren

@Controller('tenants/:tenantId/buildings') // Basispfad mit tenantId als Param
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  // GET /tenants/:tenantId/buildings
  @Get()
  findAll(@Param('tenantId') tenantId: string) {
    return this.buildingsService.findByTenant(tenantId);
  }

  // POST /tenants/:tenantId/buildings
  @Post()
  create(
    @Param('tenantId') tenantId: string,
    @Body() createBuildingDto: CreateBuildingDto,
  ) {
    return this.buildingsService.create(tenantId, createBuildingDto);
  }
}
