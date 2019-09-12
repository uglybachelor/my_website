import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import axios from "axios";

import BlogList from "./BlogList";
import Nav from "./Nav";
import { CLIENT_RENEG_LIMIT } from "tls";
class BlogModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsInfo: [],
      pageCount: 0
    };
  }

  componentDidMount() {
    // start with page 1
    this.requestPostsInfo(1);
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
              requestPostsInfo={this.requestPostsInfo}
            />
          )}
        />
      </BrowserRouter>
    );
  }

  // request posts information from backend
  // only for blog list, not including contents
  requestPostsInfo = async currPage => {
    try {
      var data = await axios.post("/api/posts", { currPage: currPage });
    } catch (error) {
      console.error(error);
    }

    const pageCount = data.data.pageCount;
    var postsInfo = data.data.postsInfo;

    // conver key "_id" to "id"
    postsInfo = postsInfo.map(pi => {
      return {
        id: pi._id,
        title: pi.title,
        summary: pi.summary,
        date: pi.date
      };
    });

    this.setState({
      postsInfo: postsInfo,
      pageCount: pageCount
    });
  };
}

export default BlogModule;
