const { changeExcusesController } = require('./controllers');

const router = require('express').Router(); 

router.get("/", changeExcusesController); 

module.exports = router; 