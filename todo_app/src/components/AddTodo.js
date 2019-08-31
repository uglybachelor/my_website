import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New todo item..."
            value={this.state.inputValue}
            onChange={this.inputEdit}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={this.addTodo}
              disabled={!this.state.inputValue ? true : false}
            >
              add
            </button>
          </div>
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
