import React, { Component } from "react";

import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todo = this.props.todo;
    return (
      <li className="list-item">
        <div className="level">
          <div className="level-left">
            <input
              id={todo.id}
              className="checkbox level-item"
              type="checkbox"
              checked={todo.status}
              onChange={this.props.toggleTodo.bind(this, todo.id)}
            />
            <label
              className={todo.status ? "content-striked" : ""}
              htmlFor={todo.id}
            >
              {todo.content}
            </label>
          </div>

          <div className="level-right">
            <button
              className="button is-danger is-outlined level-item"
              onClick={this.props.deleteTodo.bind(this, todo.id)}
            >
              delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
