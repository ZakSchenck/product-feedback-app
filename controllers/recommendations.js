const { Data } = require("../db/data");
const db = require("../db/connection");

const getAllRecommendations = (req, res) => {
  db.query('select * from public."productRequests"', (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

const getSingleRecommendation = (req, res) => {
  db.query(
    'select * from public."productRequests" where id = $1',
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

const getAllRecommendationsForUser = (req, res) => {
    // res.status(200).json({currentUser: Data[0].currentUser})
    db.query(
      'select * from public."productRequests" where "creator_ID" = $1',
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

const createRecommendation = (req, res) => {
  const query =
    'INSERT INTO public."productRequests"(title, category, upvotes, status, description, "creator_ID") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const b = req.body
  const values = [b.title, b.category, b.upvotes, b.status, b.description, b.creator_ID];
  db.query(query, values, (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

module.exports = {
  getAllRecommendations,
  getSingleRecommendation,
  createRecommendation,
  getAllRecommendationsForUser
};
