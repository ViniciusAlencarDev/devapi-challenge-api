import Connector from "../app/Models/Connector";
import { IConnectorData, IConnectorService } from "../interfaces";

export default class ConnectorService implements IConnectorService {
  async create(data: Partial<IConnectorData>) {
    const connector = new Connector({
      ...data,
      status: "ACTIVE",
    });
    await connector.save();
    return connector;
  }

  async index() {
    return await Connector.find({
      status: "ACTIVE",
    });
  }

  async filter(data: Partial<IConnectorData>) {
    return await Connector.find({
      ...data,
      status: "ACTIVE",
    });
  }

  async update(id: string, data: Partial<IConnectorData>) {
    return await Connector.updateOne(
      { id },
      {
        ...data,
      },
    );
  }

  async delete(id: string) {
    await Connector.updateOne(
      { id },
      {
        status: "INACTIVE",
      },
    );
  }
}
