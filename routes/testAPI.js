const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('The API is werking properlllyyyyyy!');
});

// Export the router
module.exports = router;
