import { ApiProperty } from '@nestjs/swagger';


export class CreateTenantDto {
  @ApiProperty({ example: 'Hausverwaltung Müller' })
  companyName: string;
  
  @ApiProperty({ example: 'mueller@example.com' })
  user: string;
}