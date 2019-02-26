const testServer = require('supertest');
const app = require('../server');

testServer('It should respond 200 to LOGOUT route', () => {
    testServer(app).post('/api/user/logout').then((response) => {
        expect(response.statusCode).toBe(200);
    })
})
