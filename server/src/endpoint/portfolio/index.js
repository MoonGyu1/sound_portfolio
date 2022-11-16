const express = require('express');
const router = express.Router();

router.post('/sound/upload', require('./portfolioSoundUploadPOST'));
router.get('/', require('./portfolioGET'));

module.exports = router;
