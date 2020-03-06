const request = require('supertest');

const server = require('../server');

describe('POST /api/auth/register', function()
{
    test('should return 201 created', function()
    {
        const user = {
            name: "Edward Scissorhands",
            username: "scissors123",
            password: "sweenyTodd"
        };

        return request(server)
            .post('/api/auth/register')
            .send(user)
            .then(res =>
            {
                expect(res.status).toBe(201);
            })
    })

})

describe('POST /api/auth/login', function()
{
    test('user can log in', function()
    {
        const user = {
            username: "scissors123",
            password: "sweenyTodd"
        };

        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res =>
            {
                expect(typeof res.body.token).toBe('string');
            })
    })
})