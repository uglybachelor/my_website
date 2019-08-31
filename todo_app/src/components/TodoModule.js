import React, { Component } from "react";
import axios from "axios";

import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

import "./TodoModule.css";

class TodoModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          content: "pick up dry cleaning",
          status: false
        },
        {
          id: 2,
          content: "buy milk",
          status: false
        },
        {
          id: 3,
          content: "study chapter 1",
          status: true
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <TodoHeader todoCnt={this.state.todos.length} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }

  toggleTodo = id => {
    const editedTodos = this.state.todos.slice();
    editedTodos.forEach(t => {
      if (t.id === id) {
        t.status = !t.status;
      }
      return t;
    });
    this.setState({
      todos: editedTodos
    });
  };

  deleteTodo = id => {
    const editedTodos = this.state.todos.filter(t => {
      return t.id !== id;
    });
    this.setState({
      todos: editedTodos
    });
  };

  addTodo = value => {
    const newTodo = {
      id: 10,
      content: value,
      status: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    axios.get("/api");
  };
}

export default TodoModule;
