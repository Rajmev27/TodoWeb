import React, { useContext } from "react";
import "./about.css";
import { Navbar } from "../components/Navbar";
import { toggleTheme } from "../context/ContextTheme";

export const About = () => {
  const { mode } = useContext(toggleTheme);

  return (
    <div className={`${mode === "dark" ? "about-body" : "body-light"}`}>
      {/* <Navbar /> */}
      <div className="heading">
        <h1>About</h1>
      </div>
      <div className="p-container">
        <p className="text">
          A to-do list is a list of items that need to be completed. The items
          on the list can range from simple activities like replying to an
          email, to more complex tasks like creating project briefs.
        </p>
        <br></br>
        <p className="text">
          The items on a to-do list are usually action-oriented, such as
          “Schedule a meet with the R&D team” or “Call back customer X.” Some
          lists include more abstract goals, such as “improve your time
          management skills” or “learn how to use a new software program.”
        </p>
      </div>
    </div>
  );
};
