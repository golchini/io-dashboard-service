import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Tenant extends Document {
  @ApiProperty()
  @Prop({ required: true })
  companyName: string;
  
  @ApiProperty()
  @Prop({ required: true })
  tenantId: string;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
