import React from "react";
// import Layout from "../layout/Layout";
import { Navbar } from "../components/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "86vh",
          width: "100wh",
          backgroundColor: "#222",
          fontSize: "60px",
          fontFamily: "TimesNewRomam",
          color: "red",
          cursor: "default",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Page Not Found!
      </div>
    </>
  );
}

export default ErrorPage;
