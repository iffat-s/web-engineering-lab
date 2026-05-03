class ProductController {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  getAllProducts = async (req, res) => {
    const products = await this.productRepo.find();
    res.json(products);
  };

  getProductById = async (req, res) => {
    const product = await this.productRepo.findOneBy({
      id: parseInt(req.params.id)
    });
    res.json(product);
  };

  createProduct = async (req, res) => {
    const product = this.productRepo.create(req.body);
    const saved = await this.productRepo.save(product);
    res.status(201).json(saved);
  };

  updateProduct = async (req, res) => {
    const product = await this.productRepo.findOneBy({
      id: parseInt(req.params.id)
    });

    if (!product) return res.status(404).json({ message: "Not found" });

    Object.assign(product, req.body);
    const updated = await this.productRepo.save(product);

    res.json(updated);
  };

  deleteProduct = async (req, res) => {
    await this.productRepo.delete(parseInt(req.params.id));
    res.json({ message: "Deleted" });
  };
}

export default ProductController;