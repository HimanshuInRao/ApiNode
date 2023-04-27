let express = require("express");
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let connection = require("./db");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    // origin: ["https://www.google.com"], // add here the origin url for trusted origin
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(3000, function () {
  // server are listen on 3001 port
  console.log("app was listen on 3000 port");
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

app.get("/examarks", function (req, res) {
  // get all the data from the database
  let sql = "SELECT * FROM marks_master";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/examarks/id=:id", function (req, res) {
  // get only one data by their id value
  let sql = "SELECT * FROM marks_master WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results, fields) {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/insert", function (req, res) {
  // insert data into the table
  let name = req.body.name;
  let classData = req.body.class;
  let subject = req.body.subject;
  let test_name = req.body.test_name;
  let marks = req.body.marks;
  let date = req.body.date;
  let remarks = req.body.remarks;
  let total_marks = req.body.total_marks;

  let sql =
    "INSERT INTO `examarks-tnr`.`marks_master` (`name`, `class`, `subject`, `test_name`, `marks`, `date`, `remarks`, `total_marks`) VALUES ('" +
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
});

app.put("/update/id=:id", async function (req, res) {
  let sql = "UPDATE `marks_master` SET ? WHERE `marks_master`.`id` = ? "; 
  await connection.query(sql , [req.body , req.params.id] ,function(err , results) {
    if(err) throw err;
    res.send(results);
  });
});

app.delete("/delete/id=:id", function (req, res) {
  // delete data from table
  let sql = "DELETE FROM `marks_master` WHERE id = ?";
  connection.query(sql, [req.params.id], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});


  // let findId =
  //   "SELECT id FROM `examarks-tnr`.`marks_master` WHERE idString = '" +
  //   req.body.idString +
  //   "'";
  // // let sql = "UPDATE `marks` SET ? WHERE `marks`.`id` = " + findId + "";
  // let getId = 0;
  // await connection.query(findId, [req.body], function (err, results) {
  //   if (err) throw err;
  //   if (results == undefined) {
  //     res.send("unknown id was detected");
  //   } else {
  //     let id = results;
  //     console.log("id :: ", id);
  //     getId = id[0].id;
  //     updateData(getId, req.body);
  //     res.send("data are updated");
  //   }
  // });

  // console.log(getId);

// function updateData(id, data) {
//   if (id != 0) {
//     let sql = "UPDATE `marks_master` SET ? WHERE `marks_master`.`id` = " + id + "";
//     connection.query(sql, data, function (err, results) {
//       if (err) throw err;
//       // res.send("data are updated");
//       console.log("data are updated");
//     });
//   }
// }
