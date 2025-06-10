import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BuildingsService } from './buildings/buildings.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  
  try {
    const buildingsService = app.get(BuildingsService);
    
    // Your seeding logic here
    const sampleBuilding = {
      name: 'Sample Building',
      address: '123 Main St',
      description: 'A sample building for testing',
      floors: 5,
      totalUnits: 20,
    };
    
    const tenantId = '507f1f77bcf86cd799439011'; // Replace with actual tenant ID
    const building = await buildingsService.create(tenantId, sampleBuilding);
    
    console.log('Building created:', building);
    
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await app.close();
  }
}

bootstrap();