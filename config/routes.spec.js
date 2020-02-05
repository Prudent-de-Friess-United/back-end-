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
          expect(res.status).toBe(201);
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
          expect(res.status).toBe(200);
        });
    });
  });

  describe("Delete user test", () => {
    it("Should return 201", async () => {
      const register = await request(server)
        .post("/auth/login")
        .send(user);
      const remove = await request(server).delete(`/users/${register.body.id}`);
      expect(remove.status).toBe(201);

      // return request(server)
      //   .post("/auth/login")
      //   .send(user)
      //   .del("/users/1")
      //   .then(res=>{
      //     expect(res.status).toBe(201);
      //   })
      // const put = await request(server)

      //   expect(put.status).toBe(201);
    });
  });
});
/* */
