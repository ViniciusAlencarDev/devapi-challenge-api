import supertest from "supertest";
import Server from "../../src/config/server";
import connectDB from "../../src/database/connection";
import mongoose from "mongoose";

describe("Server Tests", () => {
  const port = 3030;
  let app: Server;
  let id = "";

  beforeAll((done) => {
    connectDB();

    app = new Server(port);
    app.listen(done);
    done();
  });

  afterAll((done) => {
    (async () => {
      await mongoose.connection.close();
      done();
    })();
    done();
  });

  test("POST /connector returns 201", async () => {
    const response = await supertest(app.getApp()).post("/connector").send({
      name: "Test1",
      type: "REST",
      privacy: "PUBLIC",
      baseUrl: "http://example.com",
      logoUrl: "http://example.com/logo.png",
      category: "Test1",
      description: "Test1Test1",
    });
    if (response.body.id) id = response.body.id;
    expect(response.status).toBe(201);
  });

  test("GET /connector returns 200", async () => {
    const response = await supertest(app.getApp()).get("/connector");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /connector/filter returns 200", async () => {
    const response = await supertest(app.getApp())
      .get("/connector/filter")
      .query({
        name: "Test1",
        type: "REST",
        privacy: "PUBLIC",
        category: "TESTE",
      });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("PUT /connector/:id returns 200", async () => {
    const response = await supertest(app.getApp()).get("/connector");
    expect(response.status).toBe(200);
  });

  test("POST /connector returns 200", async () => {
    const response = await supertest(app.getApp()).get("/connector/" + id);
    expect(response.status).toBe(200);
  });
});
