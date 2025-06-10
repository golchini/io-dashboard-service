import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsController } from './buildings.controller';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';

const mockBuilding = {
  _id: '507f191e810c19729de860ea',
  name: 'Test Building',
  address: '123 Main St',
  floors: 5,
  totalUnits: 20,
  tenantId: 'tenant123',
  status: true,
};

const mockBuildingsService = {
  findByTenant: jest.fn().mockResolvedValue([mockBuilding]),
  create: jest.fn().mockResolvedValue(mockBuilding),
};

describe('BuildingsController', () => {
  let controller: BuildingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingsController],
      providers: [
        {
          provide: BuildingsService,
          useValue: mockBuildingsService,
        },
      ],
    }).compile();

    controller = module.get<BuildingsController>(BuildingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all buildings for tenant', async () => {
    const result = await controller.findAll('tenant123');
    expect(result).toEqual([mockBuilding]);
    expect(mockBuildingsService.findByTenant).toHaveBeenCalledWith('tenant123');
  });

  it('should create a building', async () => {
    const dto: CreateBuildingDto = {
      name: 'Test Building',
      address: '123 Main St',
      floors: 5,
      totalUnits: 20,
    };
    const result = await controller.create('tenant123', dto);
    expect(result).toEqual(mockBuilding);
    expect(mockBuildingsService.create).toHaveBeenCalledWith('tenant123', dto);
  });
});
