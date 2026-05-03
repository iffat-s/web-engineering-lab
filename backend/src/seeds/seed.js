// 
import AppDataSource from "../config/data-source.js";
import bcrypt from "bcrypt";

async function seedDatabase() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected for seeding");

    const userRepository = AppDataSource.getRepository("User");
    const productRepository = AppDataSource.getRepository("Product");
    const userProductRepository = AppDataSource.getRepository("UserProduct");

    // 1. Seed Users (with hashed passwords for testing login)
    const hashedAdminPassword = await bcrypt.hash("admin123", 10);
    const hashedUserPassword = await bcrypt.hash("user123", 10);

    const users = [
      { name: "Admin User", email: "admin@test.com", password: hashedAdminPassword, role: "admin", age: 30 },
      { name: "Normal User", email: "user@test.com", password: hashedUserPassword, role: "user", age: 25 }
    ];

    for (const u of users) {
      const exists = await userRepository.findOneBy({ email: u.email });
      if (!exists) {
        await userRepository.save(userRepository.create(u));
        console.log(`User created: ${u.email}`);
      }
    }

    // 2. Seed Products
    const products = [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 45 }
    ];

    for (const p of products) {
      const exists = await productRepository.findOneBy({ name: p.name });
      if (!exists) {
        await productRepository.save(productRepository.create(p));
        console.log(`Product created: ${p.name}`);
      }
    }

    // 3. Seed Junction Table (Linking User to Product)
    // Let's give the "Normal User" a Laptop and a Mouse
    const testUser = await userRepository.findOneBy({ email: "user@test.com" });
    const laptop = await productRepository.findOneBy({ name: "Laptop" });

    if (testUser && laptop) {
      const linkExists = await userProductRepository.findOneBy({ 
        user: { id: testUser.id }, 
        product: { id: laptop.id } 
      });
      
      if (!linkExists) {
        await userProductRepository.save(userProductRepository.create({
          user: testUser,
          product: laptop,
          quantity: 1
        }));
        console.log("Linked User to Laptop");
      }
    }

    console.log("Seeding completed!");
    await AppDataSource.destroy();
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seedDatabase();