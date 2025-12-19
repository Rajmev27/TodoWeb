import { useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import "./form.css";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { toggleTheme } from "../context/ContextTheme";

export function Card({
  todos,
  onAddTodo,
  onDeleteTodo,
  onCompleteTodo,
  setTodos,
  editData,
  setEditData,
  handleDynamicData,
}) {
  const [task, setTask] = useState("");
  // const updateIndex = items.findIndex((item) => item.id === editData.id);
  // items[updateIndex] = {...editData, text: task};

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task);
      setTask("");
      toast.success("Task Added Successfully");
    }
  };

  useEffect(() => {
    if (editData.text) {
      setTask(editData.text);
    }
  }, [editData]);

  const updateTodoHandler = (e) => {
    let items = [...todos];
    console.log({ todos });
    e.preventDefault();
    const updateIndex = items.findIndex((item) => item.id === editData.id);
    items[updateIndex] = { ...editData, text: task };
    localStorage.setItem("todoList", JSON.stringify(items));
    setTodos(items);
    console.log(updateIndex, items);
    setEditData({});
    setTask("");
    toast.success("Task Updated Successfully");
  };

  return (
    <div className="main">
      <h2>My Todos</h2>
      <form
        onSubmit={editData ? updateTodoHandler : handleAdd}
        className="todo-form"
      >
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>
          {editData.id ? "Update" : "Add"}
        </button>
      </form>

      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-card">
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
              <div className="icons">
                <FaCheckSquare onClick={() => onCompleteTodo(todo.id)} />
                <FaEdit onClick={() => setEditData(todo)} />
                <MdDelete onClick={() => onDeleteTodo(todo.id)} />
                <FaArrowCircleRight
                  onClick={() => handleDynamicData(todo.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
