/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IConnectorData {
  name: string;
  type: "REST" | "BD" | "SOAP";
  privacy: "PUBLIC" | "PRIVATE";
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface IConnectorService {
  create(data: any): any;
  index(): any;
  filter(data: any): any;
  update(
    id: string,
    data: Partial<IConnectorData>,
  ): Promise<{ modifiedCount: number }>;
  delete(id: string): Promise<void>;
}
