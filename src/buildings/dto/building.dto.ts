import { Types } from "mongoose";

export class BuildingDto {
  id: Types.ObjectId;
  name: string;
  floors: number;
  totalUnits: number;
  address: string;
  tenantId: string;

  constructor(building: any) {
    this.id = building._id;
    this.name = building.name;
    this.address = building.address;
    this.tenantId = building.tenantId;
    this.floors = building.floors;
    this.totalUnits = building.totalUnits;
  }
}


