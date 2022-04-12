const { Data } = require("../db/data");

const getAllProducts = (req, res) => {
    res.status(200).json(Data[0].productRequests)
}

const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const productArray = Data[0].productRequests.filter((item) => item.id === Number(id))
    res.status(200).json({productArray});
}

const createProduct = (req, res) => {
    Data[0].productRequests.push(req.body);
    res.json();
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const newArray = Data[0].productRequests.filter((item) => item.id !== Number(id))
    res.send(newArray)
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct
};
