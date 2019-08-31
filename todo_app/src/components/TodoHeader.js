import React, { Component } from "react";

class TodoHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div>
          <h4>My Todo List</h4>
          <div>
            <p>You have {this.props.todoCnt || "?"} todo items.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
