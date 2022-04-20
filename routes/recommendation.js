const express = require("express");
const router = express.Router();
const {
  getSingleRecommendation,
  createRecommendation,
  getAllRecommendations,
  getAllRecommendationsForUser,
} = require("../controllers/recommendations.js");

router.route("/").get(getAllRecommendations);
router.route("/:id").get(getSingleRecommendation);
router.route("/:id/user").get(getAllRecommendationsForUser);
router.route("/").post(createRecommendation);

module.exports = router;
