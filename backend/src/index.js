import dotenv from "dotenv";
import AppDataSource from "./config/data-source.js";
import app, { setupRoutes } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    const userRepository = AppDataSource.getRepository("User");
    const productRepository = AppDataSource.getRepository("Product");
    const userProductRepository = AppDataSource.getRepository("UserProduct");

    setupRoutes(userRepository, productRepository, userProductRepository);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// import dotenv from "dotenv";
// import AppDataSource from "./config/data-source.js";
// import app, { setupRoutes } from "./app.js";

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected successfully");
//     const productRepository = AppDataSource.getRepository("Product");
//     const userProductRepository = AppDataSource.getRepository("UserProduct");
//     const userRepository = AppDataSource.getRepository("User");

//     setupRoutes(userRepository, productRepository, userProductRepository);

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });
  // // import express from "express";
// // import dotenv from "dotenv";
// // import AppDataSource from "./config/data-source.js";
// // import bcrypt from "bcrypt";

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("Server is running");
// // });

// // AppDataSource.initialize()
// //   .then(() => {
// //     console.log("Database connected successfully");

// //     const userRepository = AppDataSource.getRepository("User");

// //     app.post("/users", async (req, res) => {
// //       try {
// //         const { name, email, password, age } = req.body;
      

// //         // Hash the password before saving
// //         const hashedPassword = await bcrypt.hash(password, 10);

// //         const newUser = userRepository.create({
// //           name,
// //           email,
// //           password :hashedPassword,
// //           age
// //         });

// //         const savedUser = await userRepository.save(newUser);

// //         res.status(201).json(savedUser);
// //       } catch (error) {
// //         res.status(500).json({
// //           message: "Error creating user",
// //           error: error.message
// //         });
// //       }
// //     });

// //     app.get("/users", async (req, res) => {
// //       try {
// //         const users = await userRepository.find();
// //         res.json(users);
// //       } catch (error) {
// //         res.status(500).json({
// //           message: "Error fetching users",
// //           error: error.message
// //         });
// //       }
// //     });
// //     app.get("/results", async (req, res) => {
// //       try {
// //         const resultRepository = AppDataSource.getRepository("Result");
// //         const results = await resultRepository.find();
// //         res.json(results);
// //       } catch (error) {
// //         res.status(500).json({
// //           message: "Error fetching results",  
// //           error: error.message
// //         });

// //       }
// //     });
// //     app.get("/results/:id", async (req, res) => {
// //       try {
// //         const resultRepository = AppDataSource.getRepository("Result");
// //         const result = await resultRepository.find({
// //           where: { id: parseInt(req.params.id) }
// //         });
// //         if (result) {
// //           res.json(result);
// //         }
// //         else {
// //           res.status(404).json({ message: "Result not found" });
// //         }
// //       } catch (error) {
// //         res.status(500).json({
// //           message: "Error fetching result",
// //           error: error.message
// //         });
// //       }
// //     });

// //     app.listen(PORT, () => {
// //       console.log(`Server running on port ${PORT}`);
// //     });
// //   })
// //   .catch((error) => {
// //     console.error("Database connection failed:", error);
// //   });
// // // // const express = require('express');
// // // // const app= express();
// // // // app.use(express.json());
// // // // app.get('/user/:id', (req, res) => {
// // // //     const id = req.params.id;
// // // //     res.json({ id: id, name: 'John Doe', age: 30 });

// // // // });
// // // // app.get('/user', (req, res) => {
// // // //     res.json({ name: 'John Doe', age: 30 });
// // // // });


// // // // app.post('/student', (req, res) => {
    
// // // //    console.log(req.body);
// // // //    res.json({
// // // //     message: 'Student data received successfully',
// // // //     data: req.body
// // // //    })
// // // // });



// // // // app.listen(3000, () => {
// // // //     console.log('Server is running on port 3000');
// // // // });

// // // // import express from "express";
// // // // import dotenv from "dotenv";
// // // // import AppDataSource from "./config/data-source.js";

// // // // dotenv.config();

// // // // const app = express();
// // // // const PORT = process.env.PORT || 3000;

// // // // app.use(express.json());

// // // // app.get("/", (req, res) => {
// // // //   res.send("Server is running");
// // // // });

// // // // AppDataSource.initialize()
// // // //   .then(() => {
// // // //     console.log("Database connected successfully");

// // // //     app.listen(PORT, () => {
// // // //       console.log(`Server running on port ${PORT}`);
// // // //     });
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("Database connection failed:", error);
// // // //   });
  

// // // // import express from "express";
// // // // import dotenv from "dotenv";
// // // // import AppDataSource from "./config/data-source.js";

// // // // dotenv.config();

// // // // const app = express();
// // // // const PORT = process.env.PORT || 5000;

// // // // app.use(express.json());

// // // // app.get("/", (req, res) => {
// // // //   res.send("Server is running");
// // // // });

// // // // AppDataSource.initialize()
// // // //   .then(() => {
// // // //     console.log("Database connected successfully");

// // // //     const userRepository = AppDataSource.getRepository("User");

// // // //     app.post("/users", async (req, res) => {
// // // //       try {
// // // //         const { name, email, password } = req.body;

// // // //         const newUser = userRepository.create({
// // // //           name,
// // // //           email,
// // // //           password
// // // //         });

// // // //         const savedUser = await userRepository.save(newUser);

// // // //         res.status(201).json(savedUser);
// // // //       } catch (error) {
// // // //         res.status(500).json({
// // // //           message: "Error creating user",
// // // //           error: error.message
// // // //         });
// // // //       }
// // // //     });

// // // //     app.get("/users", async (req, res) => {
// // // //       try {
// // // //         const users = await userRepository.find();
// // // //         res.json(users);
// // // //       } catch (error) {
// // // //         res.status(500).json({
// // // //           message: "Error fetching users",
// // // //           error: error.message
// // // //         });
// // // //       }
// // // //     });

// // // //     app.listen(PORT, () => {
// // // //       console.log(`Server running on port ${PORT}`);
// // // //     });
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("Database connection failed:", error);
// // // //   }); 
// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import AppDataSource from "./config/data-source.js";

// // // dotenv.config();

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // app.use(express.json());

// // // app.get("/", (req, res) => {
// // //   res.send("Server is running");
// // // });

// // // AppDataSource.initialize()
// // //   .then(() => {
// // //     console.log("Database connected successfully");

// // //     const userRepository = AppDataSource.getRepository("User");

// // //     app.post("/register", async (req, res) => {
     
// // //       try {
// // //         const { name, email, password } = req.body;

// // //         const newUser = userRepository.create({
// // //           name,
// // //           email,
// // //           password
// // //         });

// // //         const savedUser = await userRepository.save(newUser);

// // //         res.status(201).json(savedUser);
// // //       } catch (error) {
// // //         res.status(500).json({
// // //           message: "Error creating user",
// // //           error: error.message
// // //         });
// // //       }
// // //     });
// // //      app.post("/login", async (req, res) => {
// // //       try {
// // //         const { email, password } = req.body; 
// // //         const user = await userRepository.findOneBy({ email, password });
// // //         if (user) 
// // //         {
// // //           res.json({ message: "Login successful", user });
// // //         } 
// // //         else 
// // //         {
// // //           res.status(401).json({ message: "Invalid email or password" });
// // //         }
// // //       } 
// // //       catch (error) {
// // //         res.status(500).json({
// // //           message: "Error during login",
// // //           error: error.message
// // //         });
// // //       }
// // //     });
// // //     app.get("/users", async (req, res) => {
// // //       try {
// // //         const users = await userRepository.find();
// // //         res.json(users);
// // //       } catch (error) {
// // //         res.status(500).json({
// // //           message: "Error fetching users",
// // //           error: error.message
// // //         });
// // //       }
// // //     });
 
// // //     app.get("/users/:id", async (req, res) => {
// // //       try {
// // //         const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
// // //         if (user) {
// // //           res.json(user);
// // //         }
// // //         else {
// // //           res.status(404).json({ message: "User not found" });
// // //         }
// // //       } catch (error) {
// // //         res.status(500).json({
// // //           message: "Error fetching user",
// // //           error: error.message
// // //         });
// // //       }
// // //     });

// // //     app.put("/users/:id", async (req, res) => {
// // //       try {
// // //         const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
// // //         if (user) {
// // //           userRepository.merge(user, req.body);
// // //           const updatedUser = await userRepository.save(user);
// // //           res.json(updatedUser);
// // //         } 
// // //         else {
// // //           res.status(404).json({ message: "User not found" });
// // //         }
// // //       } catch (error) {
// // //         res.status(500).json({
// // //           message: "Error updating user",
// // //           error: error.message
// // //         });
// // //       }
// // //     });

// // //     app.delete("/users/:id", async (req, res) => {
// // //       try {
// // //         const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
// // //         if (user) {
// // //           await userRepository.remove(user);
// // //           res.json({ message: "User deleted successfully" });
// // //         } else {
// // //           res.status(404).json({ message: "User not found" });
// // //         } 
// // //       } catch (error) {
// // //         res.status(500).json({
// // //           message: "Error deleting user", 
// // //           error: error.message
// // //         });
// // //       } 
// // //     });


// // //     app.listen(PORT, () => {
// // //       console.log(`Server running on port ${PORT}`);
// // //     });
// // //   })
// // //   .catch((error) => {
// // //     console.error("Database connection failed:", error);
// // //   });
// import express from "express";
// import dotenv from "dotenv";
// import bcrypt from "bcrypt";  
// import AppDataSource from "./config/data-source.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected successfully");

//     const userRepository = AppDataSource.getRepository("User");

//     app.post("/users", async (req, res) => {
//       try {
//         const { name, email, age } = req.body;

//         const newUser = userRepository.create({
//           name,
//           email,
//           age
//         });
//         const savedUser = await userRepository.save(newUser);
//         res.status(201).json(savedUser);
//       } catch (error) {
//         res.status(500).json({
//           message: "Error creating user",
//           error: error.message
//         });
//       }
//     });

//     // ✅ REGISTER
//     app.post("/register", async (req, res) => {
//       try {
//         const { name, email, password, age } = req.body;
//         // check existing user
//         const existingUser = await userRepository.findOneBy({ email });
//         if (existingUser) {
//           return res.status(400).json({ message: "Email already exists" });
//         }
//         // hash password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = userRepository.create({
//           name,
//           email,
//           password: hashedPassword,
//           age
//         });

//         const savedUser = await userRepository.save(newUser);
//         res.status(201).json({
//           message: "User registered successfully",
//           user: savedUser
//         });
//       } catch (error) {
//         res.status(500).json({
//           message: "Error registering user",
//           error: error.message
//         });  } });

//     // ✅ LOGIN
//     app.post("/login", async (req, res) => {
//       try {
//         const { email, password } = req.body;
//         const user = await userRepository.findOneBy({ email });
//         if (!user) {
//           return res.status(400).json({
//             message: "Invalid email or password"
//           });    }
//         // compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//           return res.status(400).json({
//             message: "Invalid email or password"
//           });}
//         res.json({
//           message: "Login successful",
//           user: {
//             id: user.id,
//             name: user.name,
//             email: user.email
//           } });
//       } catch (error) {
//         res.status(500).json({
//           message: "Error logging in",
//           error: error.message
//         });} });

//     // ✅ EXISTING GET USERS
//     app.get("/users", async (req, res) => {
//       try {
//         const users = await userRepository.find();
//         res.json(users);
//       } catch (error) {
//         res.status(500).json({
//           message: "Error fetching users",
//           error: error.message
//         });
//       }
//     });

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });

// import express from "express";
// import dotenv from "dotenv";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import AppDataSource from "./config/data-source.js";

// import loggerMiddleware from "./middleware/loggerMiddleware.js";
// import validateRegister from "./middleware/validateRegister.js";
// import validateLogin from "./middleware/validateLogin.js";
// import authMiddleware from "./middleware/authMiddleware.js";
// import roleMiddleware from "./middleware/roleMiddleware.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(loggerMiddleware);

// const generateAccessToken = (user) => {
//   return jwt.sign(
//     {
//       id: user.id,
//       email: user.email,
//       role: user.role
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: "15m" }
//   );
// };

// const generateRefreshToken = (user) => {
//   return jwt.sign(
//     {
//       id: user.id,
//       email: user.email,
//       role: user.role
//     },
//     process.env.JWT_REFRESH_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected successfully");

//     const userRepository = AppDataSource.getRepository("User");

//     // Basic create user route
//     app.post("/users", async (req, res, next) => {
//       try {
//         const { name, email, age, password, role } = req.body;

//         if (!name || !email || !password) {
//           return res.status(400).json({
//             message: "Name, email and password are required"
//           });
//         }

//         const existingUser = await userRepository.findOneBy({ email });
//         if (existingUser) {
//           return res.status(400).json({
//             message: "Email already exists"
//           });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = userRepository.create({
//           name,
//           email,
//           age,
//           password: hashedPassword,
//           role: role || "user"
//         });

//         const savedUser = await userRepository.save(newUser);

//         res.status(201).json({
//           message: "User created successfully",
//           user: {
//             id: savedUser.id,
//             name: savedUser.name,
//             email: savedUser.email,
//             age: savedUser.age,
//             role: savedUser.role
//           }
//         });
//       } catch (error) {
//         next(error);
//       }
//     });

//     // REGISTER
//     app.post("/register", validateRegister, async (req, res, next) => {
//       try {
//         const { name, email, password, age } = req.body;

//         const existingUser = await userRepository.findOneBy({ email });
//         if (existingUser) {
//           return res.status(400).json({
//             message: "Email already exists"
//           });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = userRepository.create({
//           name,
//           email,
//           password: hashedPassword,
//           age,
//           role: "user"
//         });

//         const savedUser = await userRepository.save(newUser);

//         res.status(201).json({
//           message: "User registered successfully",
//           user: {
//             id: savedUser.id,
//             name: savedUser.name,
//             email: savedUser.email,
//             age: savedUser.age,
//             role: savedUser.role
//           }
//         });
//       } catch (error) {
//         next(error);
//       }
//     });

//     // LOGIN -> returns access token + refresh token
//     app.post("/login", validateLogin, async (req, res, next) => {
//       try {
//         const { email, password } = req.body;

//         const user = await userRepository.findOneBy({ email });

//         if (!user) {
//           return res.status(400).json({
//             message: "Invalid email or password"
//           });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//           return res.status(400).json({
//             message: "Invalid email or password"
//           });
//         }

//         const accessToken = generateAccessToken(user);
//         const refreshToken = generateRefreshToken(user);

//         user.refreshToken = refreshToken;
//         await userRepository.save(user);

//         res.json({
//           message: "Login successful",
//           accessToken,
//           refreshToken,
//           user: {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             role: user.role
//           }
//         });
//       } catch (error) {
//         next(error);
//       }
//     });

//     // REFRESH ACCESS TOKEN
//     app.post("/refresh", async (req, res, next) => {
//       try {
//         const { refreshToken } = req.body;

//         if (!refreshToken) {
//           return res.status(401).json({
//             message: "Refresh token required"
//           });
//         }

//         const decoded = jwt.verify(
//           refreshToken,
//           process.env.JWT_REFRESH_SECRET
//         );

//         const user = await userRepository.findOneBy({ id: decoded.id });

//         if (!user || user.refreshToken !== refreshToken) {
//           return res.status(403).json({
//             message: "Invalid refresh token"
//           });
//         }

//         const newAccessToken = generateAccessToken(user);

//         res.json({
//           accessToken: newAccessToken
//         });
//       } catch (error) {
//         next(error);
//       }
//     });

   
//     // PROTECTED PROFILE ROUTE
//     app.get("/profile", authMiddleware, async (req, res, next) => {
//       try {
//         const user = await userRepository.findOneBy({ id: req.user.id });

//         if (!user) {
//           return res.status(404).json({
//             message: "User not found"
//           });
//         }

//         res.json({
//           message: "Profile fetched successfully",
//           user: {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             age: user.age,
//             role: user.role
//           }
//         });
//       } catch (error) {
//         next(error);
//       }
//     });

//     // ADMIN ONLY ROUTE
//     app.get(
//       "/admin",
//       authMiddleware,
//       roleMiddleware("admin"),
//       async (req, res, next) => {
//         try {
//           res.json({
//             message: "Welcome Admin"
//           });
//         } catch (error) {
//           next(error);
//         }
//       }
//     );
  
    
//     // LOGOUT
//     app.post("/logout", authMiddleware, async (req, res, next) => {
//       try {
//         const user = await userRepository.findOneBy({ id: req.user.id });

//         if (!user) {
//           return res.status(404).json({
//             message: "User not found"
//           });
//         }

//         user.refreshToken = null;
//         await userRepository.save(user);

//         res.json({
//           message: "Logged out successfully"
//         });
//       } catch (error) {
//         next(error);
//       }
//     });


//     // GET USERS - hide password and refreshToken
//     app.get("/users", async (req, res, next) => {
//       try {
//         const users = await userRepository.find();

//         const safeUsers = users.map(
//           ({ password, refreshToken, ...user }) => user
//         );

//         res.json(safeUsers);
//       } catch (error) {
//         next(error);
//       }
//     });


//     app.use(errorMiddleware);

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });