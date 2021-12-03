var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

/*
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
*/

var app = express();

var dbo = require("./db/conn.js");
dbo.connectToServer(function (err) {
    if (err) console.log(`Could not connect to mangodb: ${err}.`);
});

// view engine setup
/*
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
*/

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.get("/unis", async function (req, res, next) {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection("unis")
        .find({})
        .limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
