import mongoose from "mongoose";

const connectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["REST", "BD", "SOAP"],
      required: true,
    },
    privacy: {
      type: String,
      enum: ["PUBLIC", "PRIVATE"],
      required: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Data", connectorSchema);
