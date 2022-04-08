const { Data } = require("../db/data");

const getAllComments = (req, res) => {
  //   const commentsArray = Data[0].productRequests.map((comment) => comment.comments)
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
  if (!newArr) {
    return res.status(404).json({ success: false, data: [] });
  }
  return res.status(200).json({ success: true, data: newArr });
};

const createComment = (req, res) => {
  const productArray = Data[0].productRequests.filter(
    (item) => item.id === Number(id)
  );
  const commentsArray = productArray[0].comments.map((comment) => comment);
  commentsArray.push();
};

module.exports = {
  getAllComments,
  getSingleComment,
  getReplies,
};
