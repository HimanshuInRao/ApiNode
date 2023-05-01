let connection = require("../../database/db-config");

// route.get("/examarks"
let getData = (req, res, next) => {
  // get all the data from the database
  let sql = "SELECT * FROM classes";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

// route.get("/examarks/id=:id",
let getDataById = (req, res, next) => {
  // get only one data by their id value
  let sql = "SELECT * FROM classes WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
};

// route.post("/insert",
let insertData = (req, res, next) => {
  // insert data into the table
  let className = req.body.class;

  let sql =
    "INSERT INTO `examarks-tnr`.`classes` (`class`) VALUES ('" +
    className +
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
  let sql = "UPDATE `classes` SET ? WHERE `classes`.`id` = ? ";
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
  let sql = "DELETE FROM `classes` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

let getDataByName = (req, res, next) => {
  let sql = "SELECT id FROM `examarks-tnr`.classes WHERE classes.class = ?";
  connection.query(sql , [req.params.name] , (err , result) => {
    if (err) throw err;
    res.send(result); 
  })
};

module.exports = { getData, getDataById, insertData, updateData, deleteData , getDataByName };
