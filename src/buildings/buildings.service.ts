import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model, Types } from 'mongoose';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Building, BuildingDocument } from './schemas/building.schema';

@Injectable()
export class BuildingsService {
  constructor(
    @Inject('BUILDING_MODEL') private readonly BuildingModel: Model<Building>,
  ) {}

  readonly BUILDING_DETAIL = '+name +address +tenantId +floors +totalUnits';
  async getBuildings() {
    return this.BuildingModel.find();
  };

  //TODO: Implement createBuilding method
  async createBuilding(createBuildingDto: CreateBuildingDto ) {
    const building = this.BuildingModel.create({
      ...createBuildingDto,
      status: true,
  })
    return building
  }
}
