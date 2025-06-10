import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Building, BuildingDocument } from './schemas/building.schema';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectModel(Building.name) private readonly buildingModel: Model<BuildingDocument>,
  ) {}

  readonly BUILDING_DETAIL = '+name +address +tenantId +floors +totalUnits';

  async create(tenantId: string, createBuildingDto: CreateBuildingDto): Promise<Building> {
    const buildingData = {
      ...createBuildingDto,
      tenantId,
      status: true,
    };
    const created = await this.buildingModel.create(buildingData);
    return created.toObject();
  }

  async findByTenant(tenantId: string): Promise<Building[]> {
    return this.buildingModel
      .find({ tenantId, status: true })
      .lean()
      .exec();
  }

  async findById(id: Types.ObjectId, tenantId: string): Promise<Building | null> {
    return this.buildingModel
      .findOne({ _id: id, tenantId, status: true })
      .select(this.BUILDING_DETAIL)
      .lean()
      .exec();
  }
}