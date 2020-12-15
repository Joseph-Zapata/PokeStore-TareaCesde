const express = require("express");
const router = express.Router();

const ProductsService = require("../../services/products");
const productService = new ProductsService();
router.get("/", async (req, res, next) => {
  const { tags } = req.query;

  console.log("req", req.query); //para ver como llegan los parametros (datos)

  try {
    const products = await productService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: "products listed",
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  console.log("req", req.params);

  try {
    const product = await productService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: "Product retrieved",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { body: product } = req; //body: produc, es crear un alias gracias al destrocturing

  console.log("req", req.body);

  try {
    const createdProduct = await productService.createProduct({ product });

    res.status(201).json({
      data: createdProduct, //devolver el producto en el data(deira)
      message: "product created",
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", async (req, res, next) => {
  const { productId } = req.params; //Id del product que vamos a actualizar
  const { body: product } = req; //Informacion que vamos a actualizar

  console.log("req", req.params, req.body);

  try {
    const updateProduct = await productService.updateProduct({
      productId,
      product,
    });
    res.status(200).json({
      data: updateProduct,
      message: "Product updated",
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  const { productId } = req.params;

  console.log("req", req.params);

  try {
    const deleteProduct = await productService.deleteProduct({ productId });

    res.status(200).json({
      data: deleteProduct,
      message: "product deleted",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
