let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let connection = require("../database/db-config");
// let routing = require("../routes-files/routing");
let classRoute = require("../routes-files/class.routes");
let marksRoute = require("../routes-files/marks.routes");
let studentRoute = require("../routes-files/student.routes");
let subjectRoute = require("../routes-files/subjects.routes");
let testRoute = require("../routes-files/tests.routes");
let app = express();

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

app.use("/" , classRoute , marksRoute , studentRoute , subjectRoute , testRoute);

app.listen(3000, function () {
  // server are listen on 3001 port
  console.log("app was listen on 3000 port");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});

// module.exports = app;