// DEPENDENCIES
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

// ROUTES
router.get('/', (req, res) => {
  res.render('index');
});

// EXPORTS
module.exports = router;
