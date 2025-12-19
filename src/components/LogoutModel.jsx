import React from "react";
import { createPortal } from "react-dom";

export function LogoutModel({handleNavigate,handleCancleModel}) {
  return (
    <>
      {createPortal(
        <>
          <div className="logout-model">
            <div className="box-model">
              <p>Are you sure to want to logout</p>
              <div className="logout-btns">
                <button
                onClick={handleCancleModel}
                  className="btn"
                  style={{ backgroundColor: "#e9e105", color: "white" }}
                >
                  Cancle
                </button>
                <button
                    onClick={handleNavigate}
                  className="btn"
                  style={{ backgroundColor: "#d21937", color: "white" }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("model")
      )}
    </>
  );
}

export default LogoutModel;
