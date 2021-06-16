import React, { lazy, Suspense } from "react";
import "antd/dist/antd.css";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TodoList from "./components/TodoList";
// import Login from "./components/loginForm";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Registration from "./components/Registration";
import loadingGif from "./Assets/loading.gif";
import TaskAnalytics from "./components/TaskAnalytics/TaskAnalytics";

const TodoList = lazy(() => import("./components/TodoList"));
const Login = lazy(() => import("./components/loginForm"));

const Home = lazy(() => import("./components/Home/Home"));
const Registration = lazy(() => import("./components/Registration"));

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Suspense
            fallback={
              <div>
                <img src={loadingGif} alt="" />
              </div>
            }
          >
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
            <Route path="/taskAnalytics">
              <TaskAnalytics />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
