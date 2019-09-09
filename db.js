const mongoose = require("mongoose");

// mongoose init
mongoose.connect(
  "mongodb+srv://zzh:19900804@todo-app-vdftx.mongodb.net/todos?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongodb connection success");
});
