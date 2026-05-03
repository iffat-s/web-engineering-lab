import request from 'supertest';
import app, { setupRoutes } from '../../app.js';
import AppDataSource from '../../config/data-source.js';
import User from '../../entities/User.js';
import Product from '../../entities/Product.js';
import UserProduct from '../../entities/UserProduct.js';

describe('POST /users - Register User Integration Tests', () => {
  let createdUserId;

  beforeAll(async () => {
    // Initialize database
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    
    // Get repositories
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    const userProductRepository = AppDataSource.getRepository(UserProduct);
    
    // Setup routes with repositories
    setupRoutes(userRepository, productRepository, userProductRepository);
  });

  afterAll(async () => {
    // Clean up: delete the test user if it exists
    if (createdUserId) {
      const userRepository = AppDataSource.getRepository(User);
      await userRepository.delete(createdUserId);
    }
    
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
   });

  test('should create a new user and store in database', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john2@example.com',
      password: 'SecurePass123',
      age: 25
    };

    // Make API request
    const response = await request(app)
      .post('/users')
      .send(userData);

    console.log('Response status:', response.status);
    console.log('Response body:', response.body);

    // Verify API response - YOUR API returns 201 with user object directly
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(userData.name);
    expect(response.body.email).toBe(userData.email);
    
    createdUserId = response.body.id;

    // VERIFY IN DATABASE (NO MOCKING)
    const userRepository = AppDataSource.getRepository(User);
    const dbUser = await userRepository.findOne({ 
      where: { id: createdUserId }
    });

    expect(dbUser).toBeDefined();
    expect(dbUser.name).toBe(userData.name);
    expect(dbUser.email).toBe(userData.email);
    expect(dbUser.password).not.toBe(userData.password); // Password should be hashed
  });
});