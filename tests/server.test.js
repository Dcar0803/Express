const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    
    test('It should respond with "hello world"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    
    });//end of test

});//end of describe
