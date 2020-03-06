const request = require('supertest');

const server = require('../server');


describe('GET /api/requests', function()
{
    test('test db sould have 3 requests in the table', function()
    {
        const user = {
            username: 'scissors123',
            password: 'sweenyTodd'
        };

        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res =>
            {
                const token = res.body.token;
                return request(server)
                    .get('/api/requests')
                    .set('Authorization', token)
                    .then(res =>
                    {
                        expect(res.body.length).toBe(3)
                        expect(res.type).toMatch(/json/);
                    })

            })
    })
})