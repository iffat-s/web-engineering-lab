import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

function createProductRouter(productController) {
  const router = express.Router();

  // PUBLIC
  router.get("/products", productController.getAllProducts.bind(productController));
  router.get("/products/:id", productController.getProductById.bind(productController));

  // ADMIN ONLY
  router.post(
    "/products",
    authMiddleware,
    roleMiddleware("admin"),
    productController.createProduct.bind(productController)
  );

  router.put(
    "/products/:id",
    authMiddleware,
    roleMiddleware("admin"),
    productController.updateProduct.bind(productController)
  );

  router.delete(
    "/products/:id",
    authMiddleware,
    roleMiddleware("admin"),
    productController.deleteProduct.bind(productController)
  );

  return router;
}

export default createProductRouter;