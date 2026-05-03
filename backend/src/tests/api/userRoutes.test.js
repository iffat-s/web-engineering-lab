import { jest } from "@jest/globals";
import request from "supertest";
import app, { setupRoutes } from "../../app.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


process.env.JWT_SECRET = "test-secret-key";
process.env.JWT_REFRESH_SECRET = "test-refresh-secret-key";

describe("User API Tests", () => {
  let mockUserRepository;

  beforeAll(() => {
    mockUserRepository = {
      findOneBy: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
        
        login: jest.fn(),
        logout: jest.fn()
    };

    setupRoutes(mockUserRepository);
  });

  test("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      age: 30
    };

    mockUserRepository.findOneBy.mockResolvedValue(null);

    mockUserRepository.create.mockReturnValue({
      ...newUser,
      role: "user"
    });

    mockUserRepository.save.mockResolvedValue({
      id: 1,
      ...newUser,
      role: "user"
    });

    const response = await request(app)
      .post("/users")
      .send(newUser);

    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User created successfully");
    expect(response.body.user.name).toBe("John Doe");
    expect(response.body.user.email).toBe("john@example.com");
  });


  test("should fetch all users", async () => {
    mockUserRepository.find.mockResolvedValue([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        role: "user",
        password: "hashed-password",
        refreshToken: null
      }
    ]);

    const response = await request(app).get("/users");

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0].name).toBe("John Doe");


  });

  test("should login John Doe successfully", async () => {
    const loginCredentials = {
      email: "john@example.com",
      password: "password123"
    };

    const hashedPassword = await bcrypt.hash("password123", 10);

    mockUserRepository.findOneBy.mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: hashedPassword,
      role: "user"
    });

    mockUserRepository.save.mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: hashedPassword,
      role: "user",
      refreshToken: "refresh-token-123"
    });

    const response = await request(app)
      .post("/login")
      .send(loginCredentials);

    console.log("Login response:", response.body);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful");
    expect(response.body.accessToken).toBeDefined();
    expect(response.body.refreshToken).toBeDefined();
    expect(response.body.user.email).toBe("john@example.com");
  });

  test("should logout John Doe successfully", async () => {
    
    const validToken = jwt.sign(
      { id: 1, email: "john@example.com", role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    mockUserRepository.findOneBy.mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      refreshToken: "valid-refresh-token-123"
    });

    mockUserRepository.save.mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      refreshToken: null
    });

    const response = await request(app)
      .post("/logout")
      .set("Authorization", `Bearer ${validToken}`)
      .send({});

    console.log("Logout response:", response.body);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Logged out successfully");
  });

  test("should fail login with invalid credentials", async () => {
    const loginCredentials = {
      email: "john@example.com",
      password: "wrongpassword"
    };

    mockUserRepository.findOneBy.mockResolvedValue(null);

    const response = await request(app)
      .post("/login")
      .send(loginCredentials);

    console.log("Failed login response:", response.body);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid email or password");
  });

  test("should fail logout without token", async () => {
    const response = await request(app)
      .post("/logout")
      .send({});

    console.log("Failed logout response:", response.body);

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Access denied. No token provided");
  });
  
});