const { Data } = require("../db/data");
const db = require("../db/connection");

const getAllComments = (req, res) => {
  db.query(
    'MERGE INTO public."productRequests"',
    [Number(req.params.reply_id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
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
  // const { id } = req.params;
  // const productArray = Data[0].productRequests.filter(
  //   (item) => item.id === Number(id)
  // );
  // res.json(productArray[0].comments.push(req.body));
  const b = req.body
  db.query(
    'INSERT INTO public.comments (request_id, user_id, reply_id, content, replying_to) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [b.request_id, b.user_id, b.reply_id, b.content, b.replying_to],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
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
