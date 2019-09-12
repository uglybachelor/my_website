import React, { Component } from "react";

import BlogListItem from "./BlogListItem";
import Pagination from "./Pagination";

import "./BlogList.css";

class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <div className="container post-list">
          {this.props.postsInfo.map(pi => {
            return <BlogListItem key={pi.id} postInfo={pi} />;
          })}
          <Pagination
            pageCount={this.props.pageCount}
            requestPostsInfo={this.props.requestPostsInfo}
          />
        </div>
      </section>
    );
  }
}

export default BlogList;
