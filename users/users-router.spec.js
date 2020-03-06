const request = require("supertest");
const server = require("../server");

describe("users router", function() {
  it("should run the users tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/users", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return users as the router value", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return an array of users", async function() {
      const res = await request(server).get("/api/users");

      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
