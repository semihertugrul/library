import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./todoList";
import Request from "react-http-request";

class App extends Component {
  render() {
    const bbb = ["yapılacak ilk iş"];

    return (
      <div className="App">
        <Request
          url="http://5ba7a64668c16e0014c4eeff.mockapi.io/kitap"
          method="get"
          accept="application/json"
          // verbose={true}
        >
          {({ error, result, loading }) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              const listeHtml = result.body.map((item, i) => {
                return (
                  <div>
                    {i} - {item.kitapAdi}
                  </div>
                );
              });
              return <div> {listeHtml}</div>;

              // return <div>{JSON.stringify(result)}</div>;
            }
          }}
        </Request>

        <TodoList aaa={bbb} />
      </div>
    );
  }
}

export default App;
