const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('GET started')
  console.log('req.params', req.params)
  const query = 
    `
    SELECT 
        "movies"."title", 
        "movies"."description",
        "movies"."poster", 
        "genres"."name" 

      FROM "movies_genres"
        INNER JOIN "genres"
      ON "movies_genres"."genre_id"="genres"."id"
        INNER JOIN "movies"
      ON "movies_genres"."movie_id"="movies"."id"
        WHERE "movies"."id"='${req.params.id}';
    `
    sqlValue = (req.params);
  pool.query(query)
    .then(results => {
      console.log('results.row', results.rows)
      res.send(results.rows);
    })
    .catch(err => {
      console.log('ERROR: Get one movie', err);
      res.sendStatus(500)
    })

});

module.exports = router;