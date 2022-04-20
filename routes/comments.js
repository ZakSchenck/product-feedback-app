const express = require("express");
const router = express.Router();
const {
  getAllComments,
  getSingleComment,
  getReplies,
  createComment
} = require("../controllers/comments.js");

// get all comments for request
// get single comment
// get all replies to a comment
router.route("/all/:reply_id").get(getAllComments);
router.route("/:comment_id").get(getSingleComment);
router.route("/replies/:comment_id").get(getReplies);
router.route("/").post(createComment);

module.exports = router;
