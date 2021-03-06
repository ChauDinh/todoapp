import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todo extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// Proptypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todo;
