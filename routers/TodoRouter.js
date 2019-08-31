module.exports = app => {
  app.get("/api", (req, res) => {
    console.log("get method");
  });
};
