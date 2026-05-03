class UserProductRepository {
    constructor() {
      this.userProducts = []; // Stores { id, user_id, product_id, quantity }
      this.currentId = 1;
    }
  
    async addProductToUser(userId, productId, quantity) {
      // Check if user already has this product
      const existing = this.userProducts.find(
        (up) => up.user_id === userId && up.product_id === productId
      );
  
      if (existing) {
        existing.quantity += quantity;
        return existing;
      }
  
      const entry = {
        id: this.currentId++,
        user_id: userId,
        product_id: productId,
        quantity: quantity || 1
      };
      this.userProducts.push(entry);
      return entry;
    }
  
    async findByUserId(userId) {
      return this.userProducts.filter((up) => up.user_id === userId);
    }
  
    async updateQuantity(id, newQuantity) {
      const entry = this.userProducts.find((up) => up.id === parseInt(id));
      if (entry) {
        entry.quantity = newQuantity;
        return entry;
      }
      return null;
    }
  
    async remove(id) {
      const index = this.userProducts.findIndex((up) => up.id === parseInt(id));
      if (index !== -1) {
        return this.userProducts.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  module.exports = UserProductRepository;