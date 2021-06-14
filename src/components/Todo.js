import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Modal, Button, Form, Input } from "antd";
import TodoList from "./TodoList";

const { Item } = Form;

let getTaskFinishedTime = () => {
  let time = localStorage.getItem("taskFinishedTime");

  if (time) {
    return JSON.parse(localStorage.getItem("taskFinishedTime"));
  } else {
    return {
      time: 0,
    };
  }
};

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [modal, setModal] = useState(false);
  const [taskFinishedTime, setTaskFinishedTime] = useState(
    getTaskFinishedTime()
  );
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  useEffect(() => {
    localStorage.setItem("taskFinishedTime", JSON.stringify(taskFinishedTime));
  }, [taskFinishedTime]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const action = () => {
    console.log(taskFinishedTime);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskFinishedTime({ ...taskFinishedTime, [name]: value });
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <Modal
        title="Task Finishing Time"
        visible={modal}
        onCancel={closeModal}
        onOk={closeModal}
        centered
        footer={[
          <Button onClick={closeModal}> Cancel </Button>,
          <Button type="primary" onClick={action}>
            Ok
          </Button>,
        ]}
      >
        <Form>
          <Item label="Time">
            <Input name="time" onChange={handleChange} />
          </Item>
        </Form>
      </Modal>
      <div>
        <Button onClick={openModal}>Task Time</Button>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
