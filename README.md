<p align="center"> <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> </p> <h1 align="center">🏢 IoT Management Backend for Property Managers</h1> <p align="center"> A multi-tenant backend platform for managing smart devices in buildings – built with <a href="https://nestjs.com" target="_blank">NestJS</a>. </p> <p align="center"> <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /> <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /> <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads" /> <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /> </p>
📌 Project Description
This is a simplified multi-tenant IoT management backend. It is designed for property managers to monitor smart devices (e.g., heating valves, meters) installed in buildings.

Key Features
✅ Multi-Tenant Architecture – Each customer (tenant) manages their own buildings and devices.

📦 Modular NestJS Codebase – Clean and scalable architecture.

📊 Device Telemetry – Devices can send and query time-series data.

🔐 Role-Based Access Control (RBAC) – Admins can manage, viewers can monitor.

📄 Swagger API Documentation – Auto-generated and interactive.

🏗️ Tech Stack
Backend Framework: NestJS

Database: MongoDB (multi-tenant via scoped queries)

Auth: JWT + RBAC (Admin / Viewer)

API Docs: Swagger (OpenAPI 3)

Containerization: Docker + Docker Compose

🚀 Getting Started
1. Clone the Repository
bash
Kopieren
Bearbeiten
git clone https://github.com/your-org/your-repo-name.git
cd your-repo-name
2. Environment Configuration
Create a .env file in the root:

env
Kopieren
Bearbeiten
DB_NAME=thermotrack
DB_HOST=mongo
DB_PORT=27017
DB_USER=d03c4243
DB_USER_PWD=Spendable-Darling6-During
Or configure everything directly in docker-compose.yml.

🐳 Running with Docker
Build and start services:
bash
Kopieren
Bearbeiten
docker-compose up --build
Access the API
App: http://localhost:3000

Swagger Docs: http://localhost:3000/api

🔐 Authentication & Roles
Admin – Full access to all resources under a tenant.

Viewer – Read-only access to building/device data.

Uses JWT for authentication and custom guards for role protection.

📡 Endpoints Overview
Method	Route	Description
GET	/tenants/:tenantId/buildings	List buildings for a tenant
POST	/tenants/:tenantId/buildings	Create a building
GET	/devices/:id/data	Get telemetry data for a device
POST	/devices/:id/data	Ingest new telemetry data
POST	/auth/login	Authenticate and get JWT

Swagger UI available at /api.

🧪 Testing
bash
Kopieren
Bearbeiten
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
📦 Build for Production
bash
Kopieren
Bearbeiten
# Build app
npm run build

# Start with Node
npm run start:prod
Or use Docker Compose:

bash
Kopieren
Bearbeiten
docker-compose -f docker-compose.prod.yml up --build
📚 Resources
NestJS Documentation

MongoDB Docs

Swagger/OpenAPI

📝 License
MIT © [Your Name or Org]