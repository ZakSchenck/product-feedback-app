const { Data } = require("../db/data");

const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const productArray = Data[0].productRequests.filter((item) => item.id === Number(id))
    res.status(200).json({productArray});
}

module.exports = {
  getSingleProduct
};