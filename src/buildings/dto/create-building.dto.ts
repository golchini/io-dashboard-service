import { IsNumber, isString, IsString, Min } from "class-validator";
import { BuildingDto } from "./building.dto";

export class CreateBuildingDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    @Min(1)
    floors: number;

    @IsNumber()
    @Min(1)
    totalUnits: number;

    constructor(building: BuildingDto) {
        this.name = building.name;
        this.address = building.address;
        this.floors = building.floors;
        this.totalUnits = building.totalUnits;
    }
}