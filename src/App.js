import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './todoList';

class App extends Component {
  render() {

    const bbb = [
      "yapılacak ilk iş"
    ]

    return (
      <div className="App">
        <TodoList aaa={bbb} ></TodoList>
      </div>
    );
  }
}

export default App;
