import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuildingDocument = Building & Document;

@Schema({ timestamps: true })
export class Building {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  tenantId: string;

  @Prop({ required: true })
  floors: number;

  @Prop({ required: true })
  totalUnits: number;

  @Prop({ default: true })
  status: boolean;
}

export const BuildingSchema = SchemaFactory.createForClass(Building);