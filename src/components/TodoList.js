import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const getTasks = () => {
  let tasks = localStorage.getItem("todos");

  if (tasks) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function TodoList(props) {
  const [todos, setTodos] = useState(getTasks());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="todo-app">
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo}>
          <h1> {props.time} </h1>
        </TodoForm>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></Todo>
      </div>
    </>
  );
}

export default TodoList;
