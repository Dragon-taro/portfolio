const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => res.render("index"));
app.get("/admin", (req, res) => res.render("admin"));

app.use(express.static("static"));

app.listen(port, function() {
  console.log(`server listen on port ${port}`);
});
