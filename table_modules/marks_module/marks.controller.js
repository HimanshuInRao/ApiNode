let connection = require("../../database/db-config");
const { param } = require("../../routes-files/marks.routes");

// route.get("/examarks"
let getData = (req, res, next) => {
  // get all the data from the database
  let sql = "SELECT * FROM marks_master";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

// route.get("/examarks/id=:id",
let getDataById = (req, res, next) => {
  // get only one data by their id value
  let sql = "SELECT * FROM marks_master WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
};

// route.post("/insert",
let insertData = (req, res, next) => {
  // insert data into the table
  let studentId = req.body.s_id;
  let name = req.body.name;
  let classData = req.body.class;
  let subject = req.body.subject;
  let test_name = req.body.test_name;
  let marks = req.body.marks;
  let date = req.body.date;
  let remarks = req.body.remarks;
  let total_marks = req.body.total_marks;

  let sql =
    "INSERT INTO `examarks-tnr`.`marks_master` (`s_id` , `name`, `class`, `subject`, `test_name`, `marks`, `date`, `remarks`, `total_marks`) VALUES ('" +
    studentId +
    "','" +
    name +
    "', '" +
    classData +
    "', '" +
    subject +
    "', '" +
    test_name +
    "', '" +
    marks +
    "', '" +
    date +
    "', '" +
    remarks +
    "', '" +
    total_marks +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    // res.send(results);
    res.send("data was added");
    console.log("data was added");
  });
};

// route.put("/update/id=:id",
let updateData = async (req, res, next) => {
  let sql = "UPDATE `marks_master` SET ? WHERE `marks_master`.`id` = ? ";
  await connection.query(
    sql,
    [req.body, req.params.id],
    function (err, results) {
      if (err) throw err;
      res.send(results);
    }
  );
};

// route.delete("/delete/id=:id",
let deleteData = (req, res, next) => {
  // delete data from table
  let sql = "DELETE FROM `marks_master` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let selectTimeData = (req, res, next) => {
  let sql = "SELECT * FROM marks_master WHERE remarks = ?";
  connection.query(sql, [req.params.remarks], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let selectByClass = (req, res, next) => {
  let sql = "SELECT * FROM marks_master WHERE class = ?";
  connection.query(sql, [req.params.class], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let selectByClassSub = (req, res, next) => {
  // let className = req.body.class;
  // let subjectName = req.body.subject;
  let sql =
    "SELECT * FROM `examarks-tnr`.marks_master where class = '" +
    req.params.class +
    "' AND subject = '" +
    req.params.subject +
    "'";
  connection.query(sql, [req.params.class , req.params.subject], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let selectByClassSubTest = (req, res, next) => {
  let className = req.body.class;
  let subjectName = req.body.subject;
  let testName = req.body.test_name;
  let sql =
    "SELECT * FROM `examarks-tnr`.marks_master where class = '" +
    req.params.class +
    "' AND subject='" +
    req.params.subject +
    "' AND test_name='" +
    req.params.test_name +
    "'";
  connection.query(sql, [req.params.class ,req.params.subject , req.params.test_name], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let selectTime = (req, res, next) => {  
  let sql =
    "SELECT remarks FROM `examarks-tnr`.marks_master";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let getTimeByClass = (req, res, next) => {  
  let classId = req.body.class
  let sql =
    "SELECT remarks FROM `examarks-tnr`.marks_master where class = '"+ classId +"' ";
  connection.query(sql , [req.body] , function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};
// getDataById ,
// insertData ,
// updateData ,
// deleteData

module.exports = {
  getData,
  getDataById,
  insertData,
  updateData,
  deleteData,
  selectTimeData,
  selectByClass,
  selectByClassSub,
  selectByClassSubTest,
  selectTime,
  getTimeByClass,
};
