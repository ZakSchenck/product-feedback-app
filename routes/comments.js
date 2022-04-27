const express = require("express");
const router = express.Router();
const {
  getAllComments,
  getSingleComment,
  getReplies,
  createComment,
  editComment,
  deleteComment
} = require("../controllers/comments.js");

// get all comments for request
// get single comment
// get all replies to a comment
router.route("/all/:request_id").get(getAllComments);
router.route("/:id").get(getSingleComment);
router.route("/replies/:reply_id").get(getReplies);
router.route("/").post(createComment);
router.route("/:id").put(editComment)
router.route("/:id").delete(deleteComment)

module.exports = router;
