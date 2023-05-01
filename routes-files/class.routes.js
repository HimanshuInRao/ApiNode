const express = require('express'); 
const router  = express.Router(); 
const classes = require('../table_modules/classes_module/class.controller');

router.get('/class/get', classes.getData);
router.get('/class/get/id=:id', classes.getDataById);
router.get('/class/getId/name=:name', classes.getDataByName);
router.post('/class/insert', classes.insertData);
router.put('/class/update/id=:id', classes.updateData);
router.delete('/class/delete/id=:id', classes.deleteData);


module.exports = router;