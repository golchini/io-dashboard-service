import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { BuildingsService } from './buildings.service';
import { Building } from './schemas/building.schema';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Types } from 'mongoose';

describe('BuildingsService', () => {
  let service: BuildingsService;
  let mockBuildingModel: any;

  beforeEach(async () => {
    mockBuildingModel = {
      create: jest.fn(),
      find: jest.fn().mockReturnThis(),
      findOne: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      lean: jest.fn().mockReturnThis(),
      exec: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingsService,
        {
          provide: getModelToken(Building.name),
          useValue: mockBuildingModel,
        },
      ],
    }).compile();

    service = module.get<BuildingsService>(BuildingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a building and return it as object', async () => {
      const dto: CreateBuildingDto = {
        name: 'Test Building',
        address: '123 Main St',
        floors: 5,
        totalUnits: 20,
      };
      const tenantId = 'tenant123';
      const expected = { ...dto, tenantId, status: true };
      const created = { toObject: () => expected };

      mockBuildingModel.create.mockResolvedValue(created);

      const result = await service.create(tenantId, dto);
      expect(mockBuildingModel.create).toHaveBeenCalledWith({
        ...dto,
        tenantId,
        status: true,
      });
      expect(result).toEqual(expected);
    });
  });

  describe('findByTenant', () => {
    it('should return list of buildings', async () => {
      const tenantId = 'tenant123';
      const mockResult = [{ name: 'B1' }, { name: 'B2' }];
      mockBuildingModel.exec.mockResolvedValue(mockResult);

      const result = await service.findByTenant(tenantId);

      expect(mockBuildingModel.find).toHaveBeenCalledWith({ tenantId, status: true });
      expect(result).toEqual(mockResult);
    });
  });

  describe('findById', () => {
    it('should return a building by id and tenant', async () => {
      const tenantId = 'tenant123';
      const buildingId = new Types.ObjectId();
      const mockResult = { name: 'Building A' };

      mockBuildingModel.exec.mockResolvedValue(mockResult);

      const result = await service.findById(buildingId, tenantId);

      expect(mockBuildingModel.findOne).toHaveBeenCalledWith({ _id: buildingId, tenantId, status: true });
      expect(mockBuildingModel.select).toHaveBeenCalledWith(service.BUILDING_DETAIL);
      expect(result).toEqual(mockResult);
    });
  });
});
