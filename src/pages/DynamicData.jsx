import { useContext } from "react";
import { useParams } from "react-router-dom";
import { toggleTheme } from "../context/ContextTheme";
import "../app.css";

export function DynaimcData() {
  const param = useParams();
  const { todos } = useContext(toggleTheme);
  const filterData = todos.filter((item) => item.id == param.id);
  console.log(filterData);
  return (
    <>
      <div className="dynamic-card">
        <div className="dynamic-text">{filterData[0].text}</div>
        <p className="dynamic-id"> ID : {param.id}</p>
      </div>
    </>
  );
}
