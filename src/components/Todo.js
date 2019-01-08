import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todo extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete}/>
    ));
  }
}

// Proptypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todo
