const express = require('express');
const pool = require('../services/auth_db');
const dal = require('../services/loginsDal')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let logins = await dal.getLogins()
    res.render('logins', {logins});

   
    if(DEBUG) console.table(logins)

  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
