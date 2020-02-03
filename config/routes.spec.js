const request = require("supertest");

const server = require("../api/server.js");

const db = require("../data/dbConfig.js");

describe("Server Test", () => {
  it("db environment test || set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  beforeAll(async () => {
    await db("users").truncate();
  });

  const user = { username: "Frank", password: "test", department: "buyer" };
  const user2 = { username: "Ron", password: "test", department: "seller" };

  describe("Register test", () => {
    it("Should return 201 status", () => {
      return request(server)
        .post("/auth/register")
        .send(user)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("Should return user Object", () => {
      return request(server)
        .post("/auth/register")
        .send(user2)
        .then(res => {
          expect({ ...res.body, password: "Test" }).toEqual({
            id: 2,
            username: user2.username,
            department: user2.department,
            password: "Test"
          });
          expect(typeof res.body.password).toEqual("string");
        });
    });
  });

  describe("Login Test", () => {
    it("Should Return 200", () => {
      return request(server)
        .post("/auth/login")
        .send(user)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
