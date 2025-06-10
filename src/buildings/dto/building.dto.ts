import { Types } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';

export class BuildingDto {

  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  floors: number;

  @ApiProperty()
  totalUnits: number;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  constructor(building: BuildingDto) {
    this._id = building._id;
    this.name = building.name;
    this.address = building.address;
    this.tenantId = building.tenantId;
    this.floors = building.floors;
    this.totalUnits = building.totalUnits;
  }
}


