const express = require('express'); 
const router  = express.Router(); 
const marks = require('../table_modules/marks_module/marks.controller');

router.get('/marks/get', marks.getData);
router.get('/marks/get/id=:id', marks.getDataById);
router.get('/marks/get/remarks=:remarks', marks.selectTimeData);
router.post('/marks/insert', marks.insertData);
router.put('/marks/update/id=:id', marks.updateData);
router.delete('/marks/delete/id=:id', marks.deleteData)

module.exports = router;