import React, { Component } from 'react';
import Todo from "./components/Todo";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        title: "Take out the trash",
        id: 1,
        completed: false
      },
      {
        title: "Dinner with wife",
        id: 2,
        completed: false
      },
      {
        title: "Meeting with boss",
        id: 3,
        completed: true
      }
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todo todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
