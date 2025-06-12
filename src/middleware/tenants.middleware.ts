import { BadRequestException, Inject, Injectable, InternalServerErrorException, Logger, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantsService } from '../tenants/tenants.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
  constructor(private readonly tenantsService: TenantsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id'] as string;

    if (!tenantId) {
      return new BadRequestException('Tenant ID is required');
    }

    try {
      const tenant = await this.tenantsService.getTenantById(tenantId);
      if (!tenant) {
        return new NotFoundException('Tenant not found');
      }

      // Attach tenant information to the request object
      req['tenant'] = tenant;
      next();
    } catch (error) {
      Logger.error('Error fetching tenant:', error);
      return new InternalServerErrorException('Internal server error');
    }
  }
}