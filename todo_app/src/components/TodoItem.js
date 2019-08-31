import React, { Component } from "react";

import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todo = this.props.todo;
    return (
      <li className="row">
        <div className="form-check col">
          <input
            id={todo.id}
            className="form-check-input"
            type="checkbox"
            checked={todo.status}
            onChange={this.props.toggleTodo.bind(this, todo.id)}
          />
          <label
            className={
              todo.status
                ? "content-striked form-check-label"
                : "form-check-label"
            }
            htmlFor={todo.id}
          >
            {todo.content}
          </label>
        </div>

        <button
          className="btn-outline-danger btn"
          onClick={this.props.deleteTodo.bind(this, todo.id)}
        >
          delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
