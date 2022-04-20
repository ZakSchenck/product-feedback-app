const { Data } = require("../db/data");
const db = require("../db/connection");

const getUserData = (req, res) => {
  // res.status(200).json({currentUser: Data[0].currentUser})
  db.query("select * from public.users", (error, dbRes) => {
    res.status(200).json(dbRes.rows);
  });
};

const getSingleUser = (req, res) => {
  // res.status(200).json({currentUser: Data[0].currentUser})
  console.log(req.params);
  db.query(
    "select * from public.users where id = $1",
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

const createUser = (req, res) => {
  // res.status(200).json({currentUser: Data[0].currentUser})
  const query =
    "INSERT INTO public.users(image, name, username) VALUES($1, $2, $3) RETURNING *";
  const values = [req.body.image, req.body.name, req.body.username];
  db.query(query, values, (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

module.exports = {
  getUserData,
  getSingleUser,
  createUser,
};
