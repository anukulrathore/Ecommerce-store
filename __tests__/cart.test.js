import request from 'supertest';
import app from '../src/server';

describe('Cart API', () => {
  let server;

  // Start the server before tests and stop after tests
  beforeAll((done) => {
    server = app.listen(3000, done); //start
  });

  afterAll((done) => {
    server.close(done); //stop
  });

  it('should add items to the cart', async () => {
    const response = await request(app).post('/api/v1/cart/add').send({
      userId: 'user1',
      items: [{ productId: 'p1', name: 'Item 1', price: 100, quantity: 2 }],
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.items).toHaveLength(1);
  });
});
