const express = require('express'); 
const router  = express.Router(); 
const students = require('../table_modules/students_module/student.controller');

router.get('/student/get', students.getData);
router.get('/student/get/getStudentByID/id=:id', students.getStudentByID);
router.get('/student/get/id=:id', students.getDataByClassId);
router.post('/student/insert', students.insertData);
router.put('/student/update/id=:id', students.updateData);
router.delete('/student/delete/id=:id', students.deleteData);

module.exports = router; 