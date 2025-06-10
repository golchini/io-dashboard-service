import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { DatabaseFactory } from './database.factory';

// 👇 Diese Imports brauchst du für das Laden der Konfigs
import databaseConfig from './config/database.config';
import serverConfig from './config/server.config';

@Module({
  imports: [
    // 👇 Konfigurationsmodule laden – wichtig!
    ConfigModule.forRoot({
      isGlobal: true, // Damit überall verfügbar ohne nochmaliges Importieren
      load: [databaseConfig, serverConfig],
    }),

    // 👇 Mongoose async Konfiguration
    MongooseModule.forRootAsync({
      useClass: DatabaseFactory,
    }),

    // 👇 Dein Buildings-Modul
    BuildingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
