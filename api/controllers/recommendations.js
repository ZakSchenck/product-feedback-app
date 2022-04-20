const { Data } = require("../db/data");

const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const productArray = Data[0].productRequests.filter((item) => item.id === Number(id))
    res.status(200).json({productArray});
}

const createProduct = (req, res) => {
    res.json(Data[0].productRequests.push(req.body));
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const newArray = Data[0].productRequests.filter((item) => item.id !== Number(id))
    res.send(newArray)
}

module.exports = {
  getSingleProduct,
  createProduct,
  deleteProduct
};