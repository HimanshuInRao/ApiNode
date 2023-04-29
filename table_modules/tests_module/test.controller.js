let connection = require("../../database/db-config");

// route.get("/examarks"
let getData = (req, res, next) => {
  // get all the data from the database
  let sql = "SELECT * FROM test_type";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

// route.get("/examarks/id=:id",
let getDataById = (req, res, next) => {
  // get only one data by their id value
  let sql = "SELECT * FROM test_type WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
};

// route.post("/insert",
let insertData = (req, res, next) => {
  // insert data into the table
  let testName = req.body.test_name;

  let sql =
    "INSERT INTO `examarks-tnr`.`test_type` (`test_name`) VALUES ('" +
    testName +
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
  let sql = "UPDATE `test_type` SET ? WHERE `test_type`.`id` = ? ";
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
  let sql = "DELETE FROM `test_type` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = { getData, getDataById, insertData, updateData, deleteData };
