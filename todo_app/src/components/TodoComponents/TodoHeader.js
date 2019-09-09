import React, { Component } from "react";

import "./TodoHeader.css";

class TodoHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="todoHeader" className="section">
        <div className="content">
          <h2>My Todo List</h2>
          <div>
            <p>
              You have{" "}
              <strong className="has-text-danger">
                {this.props.todoCnt || "?"}
              </strong>{" "}
              todo items.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default TodoHeader;
