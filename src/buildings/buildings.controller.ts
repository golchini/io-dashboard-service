import { Body, Controller, Get, Post, Headers, HttpException, BadRequestException } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { Building } from './schemas/building.schema';

@ApiTags('Buildings') // Gruppierung im Swagger-UI
@Controller('buildings')
export class BuildingsController {
  constructor(
    private readonly buildingsService: BuildingsService,
    ) {}

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
  getBuildings() {
    return this.buildingsService.getBuildings();
  }

  @Post()
  @ApiOperation({ summary: 'Neues Gebäude erstellen' })
  @ApiHeader({
    name: 'x-tenant-id',
    required: true,
    description: 'Mandanten-ID im Header',
    schema: { type: 'string' },
  })
  @ApiBody({
    type: CreateBuildingDto,
    description: 'Gebäude-Daten',
  })
  @ApiResponse({
    status: 201,
    description: 'Gebäude wurde erfolgreich erstellt.',
  })
  @ApiResponse({
    status: 400,
    description: 'Ungültige Eingabedaten.',
  })
  async createBuilding(
    @Body() createBuildingDto: CreateBuildingDto,
  ) : Promise<Building> {

    return await this.buildingsService.createBuilding(createBuildingDto);
  }
}
