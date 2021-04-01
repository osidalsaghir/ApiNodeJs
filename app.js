const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const email = require('./api/middleware/email');
const Api = require('./api/routes/Api');
const Category = require('./api/routes/Category');
const Curses = require('./api/routes/Curses');
const Cuurency = require('./api/routes/Cuurency');
const EmailModels = require('./api/routes/EmailModels');
const Instructor = require('./api/routes/Instructor');
const Languages = require('./api/routes/Languages');
const learningPlan = require('./api/routes/learningPlan');
const Lesson = require('./api/routes/Lesson');
const Level = require('./api/routes/Level');
const levelInstructor = require('./api/routes/levelInstructor');
const OtherSection = require('./api/routes/OtherSection');
const Pages = require('./api/routes/Pages');
const Permissions = require('./api/routes/Permissions');
const Posts = require('./api/routes/Posts');
const Questions = require('./api/routes/Questions');
const Ratings = require('./api/routes/Ratings');
const Section = require('./api/routes/Section');
const SmsModels = require('./api/routes/SmsModels');
const Users = require('./api/routes/Users');




app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {

  if (req.method === "OPTIONS") {  res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  morgan
  next();
});
app.use("/Api", Api);
app.use("/Category", Category);
app.use("/Curses", Curses);
app.use("/Cuurency", Cuurency);
app.use("/EmailModels", EmailModels);
app.use("/Instructor", Instructor);
app.use("/Languages", Languages);
app.use("/learningPlan", learningPlan);
app.use("/Lesson", Lesson);
app.use("/Level", Level);
app.use("/levelInstructor", levelInstructor);
app.use("/OtherSection", OtherSection);
app.use("/Pages", Pages);
app.use("/Permissions", Permissions);
app.use("/Posts", Posts);
app.use("/Questions", Questions);
app.use("/Ratings", Ratings);
app.use("/Section", Section);
app.use("/SmsModels", SmsModels);
app.use("/Users", Users);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  // res.json({
  //   error: {
  //     message: error.message
  //   }
  // });
  res.sendFile( __dirname + "/api/middleware/" + "error.html" );
});
email.sendEmail();
module.exports = app;
