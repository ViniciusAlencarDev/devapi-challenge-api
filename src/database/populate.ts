import mongoose from "mongoose";
import connectDB from "./connection";
import Connector from "../app/Models/Connector";

connectDB();

const seedConnector = [
  {
    name: "Test1",
    type: "REST",
    privacy: "PUBLIC",
    baseUrl: "http://",
    logoUrl: "http://",
    category: "Test1",
    description: "Test1",
    status: "ACTIVE",
  },
];

const populateDatabase = async () => {
  try {
    await Connector.deleteMany({});
    await Connector.insertMany(seedConnector);
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    await mongoose.disconnect();
  }
};

populateDatabase();
