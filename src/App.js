import React, { Component } from 'react';
import Todo from "./components/Todo";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        title: "Take out the trash",
        id: uuid.v4(),
        completed: false
      },
      {
        title: "Dinner with wife",
        id: uuid.v4(),
        completed: false
      },
      {
        title: "Meeting with boss",
        id: uuid.v4(),
        completed: true
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
