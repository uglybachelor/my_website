const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    content: String,
    summary: String,
    time: Date
  },
  { collection: "blogs" } // define collection name, mongoose demand it must has an "s" to the end, "todo" won't work
);

module.exports = blogSchema;
