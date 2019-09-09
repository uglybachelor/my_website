const express = require("express");
const path = require("path");

const app = express();

require("./db");

// allow crors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// for parsing frontend request, axios use json format
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "todo_app/build")));

require("./routers/TodoRouter")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening on port 8000...");
});
