import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { Card } from "../components/Form";
import { Navbar } from "../components/Navbar";
import "../components/form.css";

import { Register } from "../components/Register";
import { toggleTheme } from "../context/ContextTheme";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = () => {
  const [editData, setEditData] = useState({});
  const nav = useNavigate();

  const { mode, setTodos, todos } = useContext(toggleTheme);
  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    console.log("New todo created:", newTodo);
  };
  // console.log(uuidv4());

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Task Deleted Successfully");
  };

  const editTodo = (id) => {
    setEditData(todos.find((todo) => todo.id === id));
  };
  console.log([editData]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleDynamicData = (id) => {
    nav(`/details/${id}`);
  };
  return (
    <>
      {/* <Register></Register> */}
      {/* <Navbar /> */}
      <div className={`${mode === "dark" ? "body" : "body-light"}`}>
        <div className="card-cont">
          <Card
            todos={todos}
            editData={editData}
            onAddTodo={addTodo}
            onDeleteTodo={deleteTodo}
            onCompleteTodo={completeTodo}
            editTodo={editTodo}
            setEditData={setEditData}
            setTodos={setTodos}
            handleDynamicData={handleDynamicData}
          />
        </div>
      </div>
    </>
  );
};
