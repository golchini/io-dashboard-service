db = db.getSiblingDB('thermotrack');

db.createCollection('buildings');

db.buildings.insertOne({
  _id: ObjectId("6848802502e4b4b9ed3438a0"),
  name: "Sample Building",
  address: "123 Main St",
  tenantId: "507f1f77bcf86cd799439011",
  description: "A sample building for testing",
  floors: 5,
  totalUnits: 20,
  status: true,
  createdAt: ISODate("2025-06-10T18:57:41.415Z"),
  updatedAt: ISODate("2025-06-10T18:57:41.415Z"),
  __v: 0
});