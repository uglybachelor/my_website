import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import BlogList from "./BlogList";
import Nav from "./Nav";
class BlogModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsInfo: [
        {
          id: 1,
          title: "My first blog post",
          summary:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus similique repellat, dolor sequi numquam quaerat exercitationem consectetur hic nulla delectus earum. Rem ducimus maxime eius pariatur deserunt doloribus velit! Vero?"
        },
        {
          id: 2,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 3,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 4,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 5,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 6,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 7,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 8,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 9,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        },
        {
          id: 10,
          title: "My first blog post",
          summary:
            "This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. This is my first post. "
        }
      ],
      pageCount: 4
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route
          path="/"
          exact
          render={props => (
            <BlogList
              {...props}
              postsInfo={this.state.postsInfo}
              pageCount={this.state.pageCount}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default BlogModule;
