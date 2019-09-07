import React, { Component } from "react";

import TodoItem from "./TodoItem";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todos = this.props.todos;
    return (
      <div className="column is-two-thirds">
        <div className="list">
          {todos.map(t => {
            return (
              <TodoItem
                key={t.id}
                todo={t}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
