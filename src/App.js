import React from "react";
import "antd/dist/antd.css";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/loginForm";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Registration from "./components/Registration";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/todoList">
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
