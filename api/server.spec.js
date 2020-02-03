const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

// THESE BELOW PASS

it("should set db ENV to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
