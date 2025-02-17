const request = require('supertest');
const app = require('./src/index'); // Importa la aplicación Express

describe('GET /', () => {
  it('should return the form HTML', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<form');
    expect(response.text).toContain('action="/submit"');
    expect(response.text).toContain('method="POST"');
  });
});

describe('POST /submit', () => {
  it('should greet the user by name', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ name: 'John' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, John!');
  });

  it('should return 400 if name is missing', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ name: '' });
    expect(response.status).toBe(400);
    expect(response.text).toBe('Name is required');
  });

  it('should return 400 if no body is sent', async () => {
    const response = await request(app).post('/submit');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Name is required');
  });
});

