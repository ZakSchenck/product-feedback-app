const express = require("express");
const router = express.Router();
const {
  getAllComments,
  getSingleComment,
  getReplies,
  deleteComment,
  createComment
} = require("../controllers/comments.js");

router.route("/all/:id").get(getAllComments);
router.route("/:id").get(getSingleComment);
router.route("/replies/:id").get(getReplies);
router.route("/:id/:id").delete(deleteComment);
router.route("/:id").post(createComment);

module.exports = router;
