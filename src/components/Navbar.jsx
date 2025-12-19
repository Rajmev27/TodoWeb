import { useContext, useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import LogoutModel from "./LogoutModel";
import { toggleTheme } from "../context/ContextTheme";
import { toast } from "react-toastify";
export function Navbar() {
  const [model, setModel] = useState(false);
  const { handleToggleMode, mode } = useContext(toggleTheme);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
    localStorage.removeItem("userData");
    toast.success("Logout successFully!");
  };
  const handleOpenModel = () => {
    setModel(true);
  };
  const handleCancleModel = () => {
    setModel(false);
  };
  return (
    <div>
      {model && (
        <LogoutModel
          handleNavigate={handleNavigate}
          handleCancleModel={handleCancleModel}
        />
      )}
      <nav className="navbar">
        <div className="first">
          TODO <FaSquareCheck style={{ color: "yellow" }} />
        </div>
        <div className="second">
          <ul className="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/alltodos"}>All Todos</Link>
            </li>
          </ul>
        </div>
        <div className="third">
          <div onClick={handleToggleMode}>
            {mode === "dark" ? (
              <TiWeatherPartlySunny style={{ fontSize: "25px" }} />
            ) : (
              <MdOutlineDarkMode style={{ fontSize: "25px" }} />
            )}
          </div>
          <button className="logout-btn" onClick={handleOpenModel}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
