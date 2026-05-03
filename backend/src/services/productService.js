class ProductService {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  // CREATE
  async createProduct(data) {
    const product = this.productRepo.create(data);
    return await this.productRepo.save(product);
  }

  // READ ALL
  async getAllProducts() {
    return await this.productRepo.find();
  }

  // READ ONE
  async getProductById(id) {
    return await this.productRepo.findOneBy({ id: parseInt(id) });
  }

  // UPDATE
  async updateProduct(id, data) {
    const product = await this.productRepo.findOneBy({ id: parseInt(id) });

    if (!product) return null;

    Object.assign(product, data);
    return await this.productRepo.save(product);
  }

  // DELETE
  async deleteProduct(id) {
    const result = await this.productRepo.delete(parseInt(id));

    if (result.affected === 0) return null;

    return true;
  }
}

export default ProductService;