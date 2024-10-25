import mongoose from "mongoose";
import { config as DotenvConfig } from "dotenv";
DotenvConfig();

const DB_URL = String(process.env.DB_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
