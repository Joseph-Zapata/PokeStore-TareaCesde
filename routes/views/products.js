const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");
const productService = new ProductsService();

router.get("/", async (req, res, next) => {
  const { tags } = req.query; //Si es es necesario pasarle los tags, los sacamos del query y se los pasamos al servicio

  try {
    const products = await productService.getProducts({ tags }); //Pedimos el servicio con getProducts
    res.render("products", { products }); //file products de formato pug, al cual se le pasan la opcion products
  } catch (err) {
    next(err);
  }
});

module.exports = router; //exportar la ruta
