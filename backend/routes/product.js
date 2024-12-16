const express = require("express");
const router = express.Router();

//Importar o controller
const { getProducts } = require("../controllers/productController");

//Difinir a rota / products com método GET
router.route("/products").get(getProducts);

module.exports = router;
