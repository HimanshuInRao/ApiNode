// const express = require('express'); 
// const router  = express.Router(); 

// const marks = require('../marks_module/marks.controller');
// const classes = require('../classes_module/class.controller');
// const subjects = require('../subject_module/subject.controller.js');
// const tests = require('../tests_module/test.controller');
// const students = require('../students_module/student.controller');

// marks routing
// router.get('/marks/get', marks.getData);
// router.get('/marks/get/id=:id', marks.getDataById);
// router.get('/marks/get/remarks=:remarks', marks.selectTimeData);
// router.post('/marks/insert', marks.insertData);
// router.put('/marks/update/id=:id', marks.updateData);
// router.delete('/marks/delete/id=:id', marks.deleteData);

// classes routing
// router.get('/class/get', classes.getData);
// router.get('/class/get/id=:id', classes.getDataById);
// router.post('/class/insert', classes.insertData);
// router.put('/class/update/id=:id', classes.updateData);
// router.delete('/class/delete/id=:id', classes.deleteData);

// subjects routing
// router.get('/subject/get', subjects.getData);
// router.get('/subject/get/id=:id', subjects.getDataByClassId);
// router.post('/subject/insert', subjects.insertData);
// router.put('/subject/update/id=:id', subjects.updateData);
// router.delete('/subject/delete/id=:id', subjects.deleteData);

// test-type routing
// router.get('/tests/get', tests.getData);
// router.get('/tests/get/id=:id', tests.getDataById);
// router.post('/tests/insert', tests.insertData);
// router.put('/tests/update/id=:id', tests.updateData);
// router.delete('/tests/delete/id=:id', tests.deleteData);

// students routing
// router.get('/student/get', students.getData);
// router.get('/student/get/id=:id', students.getDataByClassId);
// router.post('/student/insert', students.insertData);
// router.put('/student/update/id=:id', students.updateData);
// router.delete('/student/delete/id=:id', students.deleteData);

// total api required
// Get Classes :
//*********  router.get('/class/get', classes.getData);
//*********  router.get('/class/get/id=:id', classes.getDataById); // take class id as param
// *********  router.put('/class/update/id=:id', classes.updateData); // take class id as param

// Get Subjects 
// *********  router.get('/subject/get', subjects.getData); 
// *********  router.get('/subject/get/id=:id', subjects.getDataByClassId); // take class id as param
// *********  router.put('/subject/update/id=:id', subjects.updateData);  // take subject id as param

// Get Test-Type 
// *********  router.get('/tests/get', tests.getData); 
// *********  router.get('/tests/get/id=:id', tests.getDataById); // take test id as param
// *********  router.put('/tests/update/id=:id', tests.updateData); // take test id as param

// Get Students
// *********  router.get('/student/get', students.getData); 
// *********  router.get('/student/get/id=:id', students.getDataByClassId); // take class id as param
// *********  router.post('/student/insert', students.insertData); 
// *********  router.put('/student/update/id=:id', students.updateData); // take student id as param

// Get Marks


// module.exports = router;