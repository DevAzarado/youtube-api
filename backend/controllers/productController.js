exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    messagem: "Products all",
  });
};
