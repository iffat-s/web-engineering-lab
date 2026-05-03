import { jest } from "@jest/globals";
import UserService from "../../services/userService.js";

describe("UserService", () => {
  let mockUserRepository;
  let userService;

  beforeEach(() => {
    mockUserRepository = {
      findByEmail: jest.fn(),
      create: jest.fn(),
      findAll: jest.fn()
    };

    userService = new UserService(mockUserRepository);
  });

  test("should create a new user successfully", async () => {
    const userData = {
      name: "Ali",
      email: "ali@test.com"
    };

    mockUserRepository.findByEmail.mockResolvedValue(null);
    mockUserRepository.create.mockResolvedValue({
      id: 1,
      ...userData
    });

    const result = await userService.createUser(userData);

    expect(mockUserRepository.findByEmail).toHaveBeenCalledWith("ali@test.com");
    expect(mockUserRepository.create).toHaveBeenCalledWith(userData);
    expect(result).toEqual({
      id: 1,
      name: "Ali",
      email: "ali@test.com"
    });
  });

  test("should throw error if name is missing", async () => {
    const userData = {
      email: "ali@test.com"
    };

    await expect(userService.createUser(userData)).rejects.toThrow(
      "Name and email are required"
    );
  });

  test("should throw error if email is missing", async () => {
    const userData = {
      name: "Ali"
    };

    await expect(userService.createUser(userData)).rejects.toThrow(
      "Name and email are required"
    );
  });

  test("should throw error if user already exists", async () => {
    const userData = {
      name: "Ali",
      email: "ali@test.com"
    };

    mockUserRepository.findByEmail.mockResolvedValue({
      id: 10,
      ...userData
    });

    await expect(userService.createUser(userData)).rejects.toThrow(
      "User already exists"
    );

    expect(mockUserRepository.create).not.toHaveBeenCalled();
  });

  test("should return all users", async () => {
    const users = [
      { id: 1, name: "Ali", email: "ali@test.com" },
      { id: 2, name: "Sara", email: "sara@test.com" }
    ];

    mockUserRepository.findAll.mockResolvedValue(users);

    const result = await userService.getAllUsers();

    expect(mockUserRepository.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(users);
  });
});