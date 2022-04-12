const { Data } = require("../db/data");

const getAllProducts = (req, res) => {
    // You need an "all" route to even compare that you've added everything
    res.status(200).json(Data[0].productRequests)
}

const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const productArray = Data[0].productRequests.filter((item) => item.id === Number(id))
    res.status(200).json({productArray});
}

const createProduct = (req, res) => {
    // This is something that will be handled by just working with a DB, but you need to create the
    // next ID. I'm not really sure why it was returning 13 though
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
