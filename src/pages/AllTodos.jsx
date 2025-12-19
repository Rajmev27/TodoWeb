import { useContext, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import "./AllTodos.css";
import { useState } from "react";
import { toggleTheme } from "../context/ContextTheme";
// const dummyData = [
//   { id: 1, task: "Buy groceries", completed: false },
//   { id: 2, task: "Walk the dog", completed: true },
//   { id: 3, task: "Read a book", completed: false },
//   { id: 4, task: "Pay bills", completed: true },
//   { id: 5, task: "Call mom", completed: false },
//   { id: 6, task: "Clean the house", completed: true },
//   { id: 7, task: "Finish project", completed: false },
// ];

export function AllTodos() {
  const [apiData, setApiData] = useState([]);
  const { mode } = useContext(toggleTheme);

  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?limit=10"
    );
    const data = await response.json();
    setApiData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className={`${mode === "dark" ? "about-body" : "body-light"}`}>
        <div className="heading">
          <h1>All Todos</h1>
        </div>
        <div className="todo-list">
          {apiData.map((todo) => (
            <div key={todo.id} className="todo-item">
              <p className="task">{todo.title}</p>
              <p
                className={`status ${todo.completed ? "completed" : "pending"}`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
