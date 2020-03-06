const request = require("supertest");
const server = require("../server");

//tests to ensure auth returns error without credentials

describe("auth router", function() {
    it("should run tests", function(){
        expect(true).toBe(true);
    });

    it("should fail without req body", function() {
        return request(server)
            .post("/api/auth/register")
            .then(res => {
                const expectedStatusCode = 500;
                expect(res.status).toBe(expectedStatusCode);
            })
    })
    it("should fail without credentials for login", function() {
        return request(server)
            .post("/api/auth/login")
            .then(res => {
                const expectedStatusCode = 500;
                expect(res.status).toBe(expectedStatusCode);
            })
    })
})
