/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import ConnectorController from "../app/Controllers/ConnectorController";

const connectorRouter: any = Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: Connector creation
 *     tags: [Conectores]
 *     responses:
 *       201:
 *         description: Connector creation
 */
connectorRouter.post("/", ConnectorController.create);
/**
 * @swagger
 * /:
 *   get:
 *     summary: List all connectors
 *     tags: [Conectores]
 *     responses:
 *       200:
 *         description: List all connectors
 */
connectorRouter.get("/", ConnectorController.index);
/**
 * @swagger
 * /:
 *   get:
 *     summary: List all connectors with filter
 *     tags: [Conectores]
 *     responses:
 *       200:
 *         description: List all connectors with filter
 */
connectorRouter.get("/filter", ConnectorController.filter);
/**
 * @swagger
 * /:
 *   put:
 *     summary: Connector Edit
 *     tags: [Conectores]
 *     responses:
 *       200:
 *         description: Connector Edit
 */
connectorRouter.put("/:id", ConnectorController.update);
/**
 * @swagger
 * /:
 *   put:
 *     summary: Connector deactivation
 *     tags: [Conectores]
 *     responses:
 *       200:
 *         description: Connector deactivation
 */
connectorRouter.post("/disable/:id", ConnectorController.disable);

export default connectorRouter;
