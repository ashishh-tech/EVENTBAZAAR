const express = require('express');
const router = express.Router();
const plannerController = require('../controllers/plannerController');

router.get('/', plannerController.getPlanners);
router.get('/:id', plannerController.getPlannerById);

module.exports = router;
