import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import setupSwagger from "./docs";
import routes from "../routes";

export default class Server {
  private port: number;
  private app: Express;

  constructor(port: number) {
    this.port = port;
    this.app = express();

    this.bootstrap();
    this.docs();
    this.routes();
  }

  bootstrap() {
    this.app.use(express.json());
    this.app.use(morgan("combined"));
    this.app.use(helmet());
  }

  docs() {
    setupSwagger(this.app);
  }

  routes() {
    this.app.use(routes);
  }

  getApp() {
    return this.app;
  }

  listen(callback = function () {}) {
    this.app.listen(this.port, () => {
      console.log(`Server started in port ${this.port}`);
      callback();
    });
  }
}
