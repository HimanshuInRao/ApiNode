let connection = require("../../database/db-config");

// route.get("/examarks"
let getData = (req, res, next) => {
  // get all the data from the database
  let sql = "SELECT * FROM subjects";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  }); 
};

// route.get("/examarks/id=:id",
let getDataByClassId = (req, res, next) => {
  // get only one data by their id value
  let sql = "SELECT * FROM subjects WHERE class_id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
};

// route.post("/insert",
let insertData = (req, res, next) => {
  // insert data into the table
  let subjectName = req.body.subject_name;
  let classId = req.body.class_id;
  let sql =
    "INSERT INTO `examarks-tnr`.`subjects` (`subject_name` , `class_id`) VALUES ('" +
    subjectName +
    "' , '" +
    classId +
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
  let sql = "UPDATE `subjects` SET ? WHERE `subjects`.`id` = ? ";
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
  let sql = "DELETE FROM `subjects` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = {
  getData,
  getDataByClassId,
  insertData,
  updateData,
  deleteData,
};
