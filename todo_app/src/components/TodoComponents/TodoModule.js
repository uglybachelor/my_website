import React, { Component } from "react";
import axios from "axios";
import uuid from "node-uuid";

import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

import "./TodoModule.css";

class TodoModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    // load all todos from "/api/getalltd"
    this.loadAllTodos();
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <TodoHeader todoCnt={this.state.todos.length} />
          <section className="section">
            <div className="columns">
              <TodoList
                todos={this.state.todos}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
              />
              <AddTodo addTodo={this.addTodo} />
            </div>
          </section>
        </div>
      </section>
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

  deleteTodo = async id => {
    const res = await axios.post("/api/deltd", { id: id });

    if (res.data === "success") {
      const editedTodos = this.state.todos.filter(t => {
        return t.id !== id;
      });
      this.setState({
        todos: editedTodos
      });
    }
  };

  addTodo = async value => {
    const newTodo = {
      id: uuid.v4(),
      content: value,
      status: false
    };
    const res = await axios.post("/api/addtd", newTodo);
    if (res.data === "success") {
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  loadAllTodos = async () => {
    const res = await axios.get("/api/getalltd");
    // replace the "_id" key with "id"
    var todos = res.data;
    todos = todos.map(t => {
      return { id: t._id, content: t.content, status: t.status };
    });
    this.setState({
      todos: todos
    });
  };
}

export default TodoModule;
