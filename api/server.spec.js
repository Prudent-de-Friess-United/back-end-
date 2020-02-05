const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

it("should set db ENV to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("SERVER & AUTHORIZATION", () => {
  describe("Server", function() {
    describe("GET /", function() {
      it("should return 200 OK", function() {
        return request(server)
          .get("/")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
      // it("Needs JSON formatted response", async () => {
      //   const res = await request(server).get("/");
      //   expect(res.type).toMatch(/json/i);
      // });
    });
  });

  describe("POST /register", () => {
    describe("adds user", () => {
      beforeEach(async () => {
        await db("users").truncate();
      });

      // it("needs to return 201 OK", async () => {
      //   const res = await request(server)
      //     .post("/api/auth/register")
      //     .send({
      //       username: "mud",
      //       password: "password",
      //       department: "buyer"
      //     });
      //   expect(res.status).toBe(201);
      // });

      it("validates", async () => {
        const res = await request(server)
          .post("/auth/register")
          .send({
            username: "mud",
            password: "password",
            department: "buyer"
          });
        expect(res.body.error).toBe(undefined);
      });
    });
  });

  describe("POST /login", () => {
    describe("log in user", () => {
      it("needs to return 200 OK", async () => {
        const res = await request(server)
          .post("/auth/login")
          .send({
            username: "mud",
            password: "password",
            department: "buyer"
          });
        expect(res.status).toBe(200);
      });

      it("returns json", async () => {
        const res = await request(server)
          .post("/auth/login")
          .send({
            username: "mud",
            password: "password",
            department: "buyer"
          });
        expect(res.type).toMatch(/json/i);
      });
    });
  });

  describe("Users", () => {
    it("should return status unauthorized", () => {
      return request(server)
        .get("/users")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("should return users", () => {
      return request(server)
        .get("/users")
        .then(response => {
          expect(response.body.users);
        });
    });
  });

  describe("Items", () => {
    it("should return status unauthorized", () => {
      return request(server)
        .get("/items")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("should return items", () => {
      return request(server)
        .get("/items")
        .then(response => {
          expect(response.body.items);
        });
    });
  });
});
