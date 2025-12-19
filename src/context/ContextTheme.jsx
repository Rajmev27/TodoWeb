import {useState, createContext } from "react";

export const toggleTheme = createContext();
  
export function ThemeContext({ children }) {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [mode, setMode] = useState("dark");
  const handleToggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <toggleTheme.Provider value={{ handleToggleMode, mode, setTodos, todos }}>
        {children}
      </toggleTheme.Provider>
    </>
  );
}
