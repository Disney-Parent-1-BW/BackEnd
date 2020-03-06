const request = require("supertest");
const server = require("../server");

describe("accepted requests router", function() {
  it("should run the accepted requests tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/acceptedRequests", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/acceptedRequests")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return accepted requests as the router value", function() {
      return request(server)
        .get("/api/acceptedRequests")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/acceptedRequests")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return an array of accepted requests", async function() {
      const res = await request(server).get("/api/acceptedRequests");

      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
