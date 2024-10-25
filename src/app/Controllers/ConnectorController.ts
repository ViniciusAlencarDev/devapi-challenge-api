import { Request, Response } from "express";

import {
  createConnectorSchema,
  filterConnectorSchema,
  updateConnectorSchema,
} from "../../types/schemas/connector.schema";
import { validateSchema } from "../../utils/index";
import ConnectorService from "../../services/connector.service";

const connectorService = new ConnectorService();

class ConnectorController {
  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const validatedSchema = await validateSchema(createConnectorSchema, data);
    if (!validatedSchema.success)
      return res.status(400).json({
        message: "Check submitted fields.",
        error: validatedSchema.errors,
      });

    try {
      const connector = await connectorService.create(data);

      return res.status(201).json({ connector });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Intern error" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const connectors = await connectorService.index();

      return res.json(connectors);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Intern error" });
    }
  }

  async filter(req: Request, res: Response): Promise<Response> {
    const data = req.query;

    const validatedSchema = await validateSchema(filterConnectorSchema, data);
    if (!validatedSchema.success)
      return res.status(400).json({
        message: "Check submitted fields.",
        error: validatedSchema.errors,
      });

    try {
      const connectors = await connectorService.filter(data);

      return res.json(connectors);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Intern error" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = req.params;
    const data = req.body;

    const validatedSchema = await validateSchema(updateConnectorSchema, {
      ...data,
      id,
    });
    if (!validatedSchema.success)
      return res.status(400).json({
        message: "Check submitted fields.",
        error: validatedSchema.errors,
      });

    try {
      const connector = await connectorService.update(String(id), data);

      return res.json({ connector });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Intern error" });
    }
  }

  async disable(req: Request, res: Response): Promise<Response> {
    const id = req.params;

    try {
      await connectorService.delete(String(id));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Intern error" });
    }

    return res.json({ ...id });
  }
}

export default new ConnectorController();
