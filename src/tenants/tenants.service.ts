import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTenantDto } from './create-tenant.dto';
import { Tenant } from './tenant.schema';
import { nanoid } from 'nanoid';

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel(Tenant.name) private readonly TenantModel: Model<Tenant>,
  ) {}

  async getTenantById(tenantId: string) {
    return this.TenantModel.findOne({ tenantId });
  }
  async createTenant(tenantData: CreateTenantDto) {
    const tenantId = nanoid(12);
    return this.TenantModel.create({
      companyName: tenantData.companyName,
      tenantId: tenantId,
    });
  }
}
