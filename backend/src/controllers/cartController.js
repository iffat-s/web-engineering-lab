class CartController {
  constructor(cartService) {
    this.cartService = cartService;
  }

  addToCart = async (req, res) => {
    try {
      const { productId, quantity } = req.body;

      if (!productId) {
        return res.status(400).json({ success: false, message: "productId required" });
      }

      const entry = await this.cartService.addItem(
        req.user.id,
        productId,
        quantity || 1
      );

      res.status(201).json({ success: true, data: entry });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  getCart = async (req, res) => {
    try {
      const items = await this.cartService.getCartByUserId(req.user.id);
      res.status(200).json({ success: true, data: items });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  updateCart = async (req, res) => {
    try {
      const { quantity } = req.body;
      const { id } = req.params;

      const updated = await this.cartService.updateQuantity(id, quantity);

      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  deleteFromCart = async (req, res) => {
    try {
      const { id } = req.params;

      await this.cartService.removeItem(id);

      res.status(200).json({
        success: true,
        message: "Item removed from cart"
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
}

export default CartController;