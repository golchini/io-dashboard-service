import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Buildings') // Gruppierung im Swagger-UI
@Controller('tenants/:tenantId/buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Get()
  @ApiOperation({ summary: 'Alle Gebäude eines Tenants abrufen' })
  @ApiParam({
    name: 'tenantId',
    required: true,
    type: String,
    description: 'Mandanten-ID eines Unternehmens',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste der Gebäude wurde erfolgreich geladen.',
    schema: {
      type: 'array',
      items: { $ref: '#/components/schemas/CreateBuildingDto' }, // optional
    },
  })
  findAll(@Param('tenantId') tenantId: string) {
    return this.buildingsService.findByTenant(tenantId);
  }

  @Post()
  @ApiOperation({ summary: 'Neues Gebäude erstellen' })
  @ApiParam({
    name: 'tenantId',
    required: true,
    type: String,
    description: 'Mandanten-ID',
  })
  @ApiBody({ type: CreateBuildingDto })
  @ApiResponse({
    status: 201,
    description: 'Gebäude wurde erfolgreich erstellt.',
    type: CreateBuildingDto,
  })
  create(
    @Param('tenantId') tenantId: string,
    @Body() createBuildingDto: CreateBuildingDto,
  ) {
    return this.buildingsService.create(tenantId, createBuildingDto);
  }
}
