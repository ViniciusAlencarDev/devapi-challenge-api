import { Router } from "express";
import connectorRouter from "./connector.routes";

const router = Router();

router.use("/connector", connectorRouter);

export default router;
