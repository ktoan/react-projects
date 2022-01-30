const verifyToken = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();

// Create
router.post("/", verifyToken.verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct._doc);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Update
router.put("/:id", verifyToken.verifyTokenAndAdmin, async (req, res) => {
  try {
    const product = Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Delete
router.delete("/:id", verifyToken.verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});
// Get Product
router.get("/find/:id", async (req, res) => {
  const product = Product.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
// Get all Products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {}
});

module.exports = router;
