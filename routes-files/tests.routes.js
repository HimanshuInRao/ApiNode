const express = require("express");
const router = express.Router();
const tests = require('../table_modules/tests_module/test.controller');

router.get('/tests/get', tests.getData);
router.get('/tests/get/id=:id', tests.getDataById);
router.post('/tests/insert', tests.insertData);
router.put('/tests/update/id=:id', tests.updateData);
router.delete('/tests/delete/id=:id', tests.deleteData);

module.exports = router;
