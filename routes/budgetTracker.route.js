const express = require('express');
const router = express.Router();
const {handlesyncBank} = require('../controllers/budgetTracker.controller');

router.post('/syncBank', handlesyncBank)

module.exports = router;

