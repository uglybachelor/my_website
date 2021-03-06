import React, { Component } from "react";

import "./AddTodo.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="column">
        <div className="input-with-button">
          <form className="field has-addons" onSubmit={this.addTodo}>
            <div className="control">
              <input
                type="text"
                className="input is-primary"
                placeholder="New todo item..."
                value={this.state.inputValue}
                onChange={this.inputEdit}
              />
            </div>
            <div className="control">
              <button
                className="button is-primary"
                type="submit"
                disabled={!this.state.inputValue ? true : false}
              >
                <span>Add</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  inputEdit = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };
}

export default AddTodo;
