const Api = require("../controllers/Api");
const Category = require("../controllers/Category");
const Curses = require("../controllers/Curses");
const Cuurency = require("../controllers/Cuurency");
const EmailModels = require("../controllers/EmailModels");
const Instructor = require("../controllers/Instructor");
const Languages = require("../controllers/Languages");
const learningPlan = require("../controllers/learningPlan");
const Lesson = require("../controllers/Lesson");
const Level = require("../controllers/Level");
const levelInstructor = require("../controllers/levelInstructor");
const OtherSection = require("../controllers/OtherSection");
const Pages = require("../controllers/Pages");
const Permissions = require("../controllers/Permissions");
const Posts = require("../controllers/Posts");
const Questions = require("../controllers/Questions");
const Ratings = require("../controllers/Ratings");
const Section = require("../controllers/Section");
const SmsModels = require("../controllers/SmsModels");
const Users = require("../controllers/Users");


const Controller={
    Api:Api,
    Category:Category,
    Curses:Curses,
    Cuurency:Cuurency,
    EmailModels:EmailModels,
    Instructor:Instructor,
    Languages:Languages,
    learningPlan:learningPlan,
    Lesson:Lesson,
    Level:Level,
    levelInstructor:levelInstructor,
    OtherSection:OtherSection,
    Pages:Pages,
    Permissions:Permissions,
    Posts:Posts,
    Questions:Questions,
    Ratings:Ratings,
    Section:Section,
    SmsModels:SmsModels,
    Users:Users,
}
module.exports=Controller;

