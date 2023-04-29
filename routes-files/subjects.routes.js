const express = require("express");
const router = express.Router();
const subjects = require('../table_modules/subject_module/subject.controller');

router.get("/subject/get", subjects.getData);
router.get("/subject/get/id=:id", subjects.getDataByClassId);
router.post("/subject/insert", subjects.insertData);
router.put("/subject/update/id=:id", subjects.updateData);
router.delete("/subject/delete/id=:id", subjects.deleteData);

module.exports = router;
