const express = require('express');
const router = express.Router();
const {handleGetItems, handleAddItem, handleDeleteItem, handlesyncBank} = require('../controllers/budgetTracker.controller');

router.get('/', handleGetItems)

router.post('/add', handleAddItem)

router.post('/syncBank', handlesyncBank)

router.delete('/delete', handleDeleteItem);

module.exports = router;

