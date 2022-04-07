const { data } = require('../db/data');

const getAllComments = (req, res) => {
    const { comments } = req.body
    res.status(200).json({ comments })
}

module.exports = {
    getAllComments
}