const request = require("supertest");
const server = require("../server");

describe("ratings router", function() {
  it("should run the ratings tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/ratings", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/ratings")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return ratings as the router value", function() {
      return request(server)
        .get("/api/ratings")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/ratings")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return an array of ratings", async function() {
      const res = await request(server).get("/api/ratings");

      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
