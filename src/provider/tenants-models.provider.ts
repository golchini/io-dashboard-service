import { Connection } from 'mongoose';
import {
  Building,
  BuildingSchema,
} from 'src/buildings/schemas/building.schema';

export const tenantModels = {
  buildingModel: {
    provide: 'BUILDING_MODEL',
    useFactory: async (tenantConnection: Connection) => {
      return tenantConnection.model(Building.name, BuildingSchema);
    },
    inject: ['TENANT_CONNECTION'],
  },
};
