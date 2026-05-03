import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

function createCartRouter(cartController) {
  const router = express.Router();

  // All routes here require being logged in
  router.use(authMiddleware);

  router.post("/", cartController.addToCart);        // Add product to user
  router.get("/", cartController.getCart);           // Get current user's products
  router.put("/:id", cartController.updateCart);     // Update quantity of a specific item
  router.delete("/:id", cartController.deleteFromCart); // Remove item from user

  return router;
}

export default createCartRouter;