const express = require('express');
const router = express.Router();
const claimsController = require('../controllers/claims.controller');

router.get('/', claimsController.get);
  
router.post('/', claimsController.create);

router.put('/:id', claimsController.update);

router.delete('/:id', claimsController.remove);

module.exports = router;
