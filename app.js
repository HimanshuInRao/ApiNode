let express = require("express");
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let connection = require("./db");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(3001, function () {
  console.log("app was listen on 3001 port");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});

app.get("/", function (req, res) {
  res.send(
    "fetch Data : /examData , fetch Data with id : , /examData/id='id' , /insertData , /updateData , /deleteData/id='id'"
  );
});

app.get("/examData", function (req, res) {
  let sql = "SELECT * FROM marks";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/examData/id=:id", function (req, res) {
  let sql = "SELECT * FROM marks WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/insertData", function (req, res) {
  let name = req.body.name;
  let classData = req.body.class;
  let subject = req.body.subject;
  let test_name = req.body.test_name;
  let marks = req.body.marks;
  let date = req.body.date;
  let remarks = req.body.remarks;
  let total_marks = req.body.total_marks;
  let idString = req.body.idString;

  let sql =
    "INSERT INTO `examarks-tnr`.`marks` (`name`, `class`, `subject`, `test_name`, `marks`, `date`, `remarks`, `total_marks` , `idString`) VALUES ('" +
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
    "' , '" +
    idString +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    // res.send(results);
    res.send("data was added");
  });
});

app.put("/updateData", function (req, res) {
  let id = req.body.id;
  let name = req.body.name;
  let classData = req.body.class;
  let subject = req.body.subject;
  let test_name = req.body.test_name;
  let marks = req.body.marks;
  let date = req.body.date;
  let remarks = req.body.remarks;
  let total_marks = req.body.total_marks;
  let idString = req.body.idString;

  let sql =
    "UPDATE `marks` SET  `name`= '" +
    name +
    "', `class`= '" +
    classData +
    "',  `subject`= '" +
    subject +
    "',  `test_name`= '" +
    test_name +
    "',  `marks`= '" +
    marks +
    "',  `date`= '" +
    date +
    "',  `remarks`= '" +
    remarks +
    "',  `total_marks` ='" +
    total_marks +
    "',  `idString` ='" +
    idString +
    "' WHERE `id` = '" +
    id +
    "' ";

  // UPDATE `examarks-tnr`.`marks` SET `name` = 'Himanshu' WHERE (`id` = '2');
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.delete("/deleteData/id=:id", function (req, res) {
  let sql = "DELETE FROM `marks` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});
