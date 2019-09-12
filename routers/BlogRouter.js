const mongoose = require("mongoose");
const BlogSchema = require("../models/blogModel");

module.exports = app => {
  const Blogs = mongoose.model("Blogs", BlogSchema);

  // get all posts info, for blog list page, not includig contents
  app.post("/api/posts", async (req, res, next) => {
    const currPage = req.body.currPage;

    // return page count
    const postCount = await Blogs.countDocuments({});
    const pageCount = Math.ceil(postCount / 5);

    // get post for specific page number
    // 5 posts maximum for one page
    const skip = (currPage - 1) * 5;
    const limit = 5;

    try {
      var postsInfo = await Blogs.find(
        {},
        ["_id", "title", "summary", "time"],
        {
          skip: skip,
          limit: limit,
          sort: { date: -1 }
        }
      );
    } catch (error) {
      next(error);
    }

    // return to frontend
    res.send({ postsInfo: postsInfo, pageCount: pageCount });
  });

  // add new post
  // app.get("/api/newpost", async (req, res, next) => {
  //   const d = new Date();
  //   const newPost = new Blogs({
  //     _id: i,
  //     title: `Blog ${i} title`,
  //     content: `<h1>Blog ${i}</h1><p>This is the content of blog ${i}</p>`,
  //     summary: `This is the summary of blog ${i}`,
  //     time: d.getTime() + i * 20
  //   });

  //   try {
  //     await newPost.save(newPost);
  //   } catch (error) {
  //     next(error);
  //   }
  //   console.log("success");
  //   res.send("success");
  // });
};
