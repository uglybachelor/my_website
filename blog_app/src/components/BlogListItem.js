import React, { Component } from "react";

import "./BlogListItem.css";

class BlogListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const postInfo = this.props.postInfo;
    return (
      <div className="card post-list-item">
        <div className="card-header title-section">
          <div className="card-header-title title">{postInfo.title}</div>
          <span className="has-text-grey time">
            <time datetime="2019-09-09"> 2019.9.4</time>
          </span>
        </div>
        <div className="card-content">
          <p className="content summary">{postInfo.summary}</p>
        </div>
        <footer className="card-footer">
          <div className="readmore card-footer-item">Read More</div>
        </footer>
      </div>
    );
  }
}

export default BlogListItem;
