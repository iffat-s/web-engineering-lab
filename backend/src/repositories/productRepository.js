class ProductRepository {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    async create(productData) {
      const product = {
        id: this.currentId++,
        name: productData.name,
        price: productData.price,
      };
      this.products.push(product);
      return product;
    }
  
    async findById(id) {
      return this.products.find((p) => p.id === parseInt(id)) || null;
    }
  
    async findAll() {
      return this.products;
    }
  
    async update(id, updateData) {
      const index = this.products.findIndex((p) => p.id === parseInt(id));
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updateData };
        return this.products[index];
      }
      return null;
    }
  
    async delete(id) {
      const index = this.products.findIndex((p) => p.id === parseInt(id));
      if (index !== -1) {
        return this.products.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  module.exports = ProductRepository;