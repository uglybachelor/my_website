const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    _id: String,
    content: String,
    status: Boolean
  },
  { collection: "todos" } // define collection name, mongoose demand it must has an "s" to the end, "todo" won't work
);

module.exports = todoSchema;
