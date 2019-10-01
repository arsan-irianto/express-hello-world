const app = require('../src/app');
const request = require('supertest');

describe('GET /', () => {
	it('responds with 200', async () => {
		await request(app).get('/').expect(200);
	});
})
