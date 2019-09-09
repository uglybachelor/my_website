const mongoose = require("mongoose");
const todoSchema = require("../models/todoModel");

module.exports = app => {
  // init db model
  const Todos = mongoose.model("Todos", todoSchema);

  // return all todos
  app.get("/api/getalltd", async (req, res, next) => {
    try {
      const data = await Todos.find({});
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

  // add new todo
  app.post("/api/addtd", async (req, res, next) => {
    // res.send("success");
    const newTodo = new Todos({
      _id: req.body.id,
      content: req.body.content,
      status: req.body.status
    });
    try {
      await newTodo.save();
      res.send("success");
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/deltd", async (req, res, next) => {
    const id = req.body.id;
    try {
      await Todos.deleteOne({ _id: id });
      res.send("success");
    } catch (error) {
      next(error);
    }
  });
};
