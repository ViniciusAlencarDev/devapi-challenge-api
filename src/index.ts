import { config as DotenvConfig } from "dotenv";
import Server from "./config/server";
import connectDB from "./database/connection";
DotenvConfig();

connectDB();

const port = Number(process.env.PORT) || 3000;
const app = new Server(port);
app.listen();
