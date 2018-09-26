import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./todoList";
import { Liste } from "./liste";

class App extends Component {
  render() {
    const bbb = ["yapılacak ilk iş"];

    return (
      <div className="App">
        
        <Liste></Liste>

        <TodoList aaa={bbb} />
      </div>
    );
  }
}

export default App;
