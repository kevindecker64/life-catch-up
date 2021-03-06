const express = require('express');
const router = express.Router();

const ratingsCtrl = require('../controllers/ratings');

router.get('/:id/rating', ratingsCtrl.new)
router.put('/:id/rating', ratingsCtrl.create);

module.exports = router;