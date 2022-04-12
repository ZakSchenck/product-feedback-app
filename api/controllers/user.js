const { Data } = require("../db/data");

const getUserData = (req, res) => {
    res.status(200).json({currentUser: Data[0].currentUser})
}

module.exports = {
  getUserData
};