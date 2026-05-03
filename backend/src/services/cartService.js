class CartService {
  constructor(userProductRepo, productRepo) {
    this.userProductRepo = userProductRepo;
    this.productRepo = productRepo;
  }

  // ADD TO CART
  async addItem(userId, productId, quantity) {
    const product = await this.productRepo.findOneBy({ id: productId });
    if (!product) throw new Error("Product not found");

    const existing = await this.userProductRepo.findOne({
      where: {
        user: { id: userId },
        product: { id: productId }
      }
    });

    if (existing) {
      existing.quantity += quantity;
      return await this.userProductRepo.save(existing);
    }

    const newItem = this.userProductRepo.create({
      user: { id: userId },
      product: { id: productId },
      quantity
    });

    return await this.userProductRepo.save(newItem);
  }

  // GET CART (THIS WAS MISSING OR BROKEN)
  async getCartByUserId(userId) {
    const items = await this.userProductRepo.find({
      where: { user: { id: userId } },
      relations: ["product"]
    });

    return items.map(item => ({
      id: item.id,
      productId: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    }));
  }

  // UPDATE
  async updateQuantity(id, quantity) {
    const item = await this.userProductRepo.findOneBy({ id: parseInt(id) });

    if (!item) throw new Error("Cart item not found");

    item.quantity = quantity;
    return await this.userProductRepo.save(item);
  }

  // DELETE
  async removeItem(id) {
    const result = await this.userProductRepo.delete(parseInt(id));

    if (result.affected === 0) {
      throw new Error("Cart item not found");
    }

    return { message: "Deleted" };
  }
}

export default CartService;