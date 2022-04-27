const { Data } = require("../db/data");
const db = require("../db/connection");

const getAllComments = (req, res) => {
  db.query(
    "SELECT * FROM public.comments WHERE public.comments.request_id = $1 AND public.comments.reply_id IS null",
    [Number(req.params.request_id)],
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
  db.query(
    "SELECT * FROM public.comments WHERE  public.comments.reply_id = $1",
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

const getSingleComment = (req, res) => {
  db.query(
    "SELECT * FROM public.comments WHERE public.comments.id = $1",
    [Number(req.params.id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};

const createComment = (req, res) => {
  const b = req.body;
  db.query(
    "INSERT INTO public.comments (request_id, user_id, reply_id, content, replying_to) VALUES ($1, $2, $3, $4, $5) RETURNING *",
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
  db.query(
    "DELETE FROM public.comments WHERE public.comments.id = $1",
    [Number(req.params.id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};

const editComment = (req, res) => {
  db.query(
    "UPDATE public.comments SET content = $1 WHERE public.comments.id = $2",
    [req.body.content, Number(req.params.id)], 
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else { 
        res.status(200).json(dbRes.rows);
      }
    }
  );
}

module.exports = {
  getAllComments,
  getSingleComment,
  getReplies,
  deleteComment,
  createComment,
  editComment
};
