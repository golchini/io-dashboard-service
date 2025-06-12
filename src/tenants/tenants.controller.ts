import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './create-tenant.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Tenants')
@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post('create-tenant')
  @ApiOperation({ summary: 'Tenant erstellen' })
  @ApiBody({ type: CreateTenantDto })  async createTenant(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantsService.createTenant(createTenantDto);
  }
}