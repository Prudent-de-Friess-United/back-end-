const request = require("supertest");

const server = require("../api/server");
const db = require("../data/dbConfig.js");

describe("Server Test", () => {
  it("db enviornemt test || set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  beforeAll(async () => {
    await db("users").truncate();
  });

  const user = { username: "dirt", password: "password", department: "buyer" };
  const user2 = { username: "sky", password: "password", department: "seller" };

  describe("Register test", () => {
    it("Should return 201 status", () => {
      return request(server)
        .post("/auth/register")
        .send(user)
        .then(res => {
          let { id, username, department } = res.body;
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("id");
          expect(res.type).toBe("application/json");
          expect(res.body).toMatchObject({
            id: id,
            username: username,
            department: department
          });
        });
    });

    // it("Should return user Object", () => {
    //   return request(server)
    //     .post("/auth/register")
    //     .send(user2)
    //     .then(res => {
    //       expect({ ...res.body, password: "Test" }).toEqual({
    //         id: 2,
    //         username: user2.username,
    //         department: user2.department,
    //         password: "Test"
    //       });
    //       expect(typeof res.body.password).toEqual("string");
    //     });
    // });
  });

  describe("Login Test", () => {
    it("Should Return 200", async () => {
      return request(server)
        .post("/auth/login")
        .send(user)
        .then(res => {
          let {message} = res.body;
          expect(res.status).toBe(200);
          //expect(res.body).toHaveProperty("id");
          expect(res.type).toBe("application/json");
          expect(res.body).toMatchObject({ message: message });
          expect(res.body).toHaveProperty("token");
        });
    });
  });

  describe("Delete user test", () => {
    it("Should return 201", async () => {
      const register = await request(server)
        .post("/auth/login")
        .send(user);
      let token = register.body.token;
      const remove = await request(server)
        .delete(`/users/${register.body.id}`)
        .set("authorization", token);
      expect(remove.status).toBe(200);
      expect(remove.type).toBe("application/json");
    });
  });
});
/* */
