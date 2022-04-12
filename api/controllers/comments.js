const { Data } = require("../db/data");

const getAllComments = (req, res) => {
  const { id } = req.params;
  const productArray = Data[0].productRequests.filter(
    (item) => item.id === Number(id)
  );
  const commentsArray = productArray[0].comments.map((comment) => comment);
  res.status(200).json({ commentsArray });
};

const getReplies = (req, res) => {
  const { id } = req.params;
  const productArray = Data[0].productRequests.filter(
    (item) => item.id === Number(id)
  );
  const replyArray = productArray[0].comments.map((comment) => comment.replies);
  res.status(200).json({ replyArray });
};

const getSingleComment = (req, res) => {
  const { id } = req.params;
  let singleComment;
  Data[0].productRequests.forEach((request) => {
    request.comments?.forEach((comment) => {
      if (comment.id === Number(id)) {
        singleComment = comment;
      }
    });
  });
  return res.status(200).json({ success: true, data: singleComment });
};

const createComment = (req, res) => {
  const { id } = req.params;
  const productArray = Data[0].productRequests.filter(
    (item) => item.id === Number(id)
  );
  res.json(productArray[0].comments.push(req.body));
};

const deleteComment = (req, res) => {
  const { id } = req.params;
  const productArray = Data[0].productRequests.filter(
    (item) => item.id === Number(id)
  );
  const deletedArray = productArray.comments?.filter(
    (comment) => comment.id !== comment
  );
  res.send(deletedArray);
};

module.exports = {
  getAllComments,
  getSingleComment,
  getReplies,
  deleteComment,
  createComment,
};
