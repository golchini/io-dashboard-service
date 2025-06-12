import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingsController } from './buildings.controller';
import { BuildingsService } from './buildings.service';
import { Building, BuildingSchema } from './schemas/building.schema';
import { TenantsMiddleware } from '../middleware/tenants.middleware';
import { tenantConnectionProvider } from '../provider/tenant-connection.provider';
import { tenantModels } from 'src/provider/tenants-models.provider';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Building.name, schema: BuildingSchema },
    ]),
  ],
  controllers: [BuildingsController],
  providers: [
    BuildingsService,
    tenantConnectionProvider,
    tenantModels.buildingModel,
  ],
  exports: [BuildingsService],
})
export class BuildingsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(BuildingsController);
  }
}
