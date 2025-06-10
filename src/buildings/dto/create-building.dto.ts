import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BuildingDto } from './building.dto';

export class CreateBuildingDto {
  @ApiProperty({ example: 'District Living', description: 'Name des Gebäudes' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Hauptstraße 12, 1210 Wien', description: 'Adresse des Gebäudes' })
  @IsString()
  address: string;

  @ApiProperty({ example: 5, description: 'Anzahl der Etagen', minimum: 1 })
  @IsNumber()
  @Min(1)
  floors: number;

  @ApiProperty({ example: 20, description: 'Gesamtanzahl der Wohneinheiten', minimum: 1 })
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