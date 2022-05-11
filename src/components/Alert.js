import React from "react";

const Alert = ({ errMsg, show, handleShow }) => {
  return (
      <div
        onClick={handleShow}
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
          top: 0,
          display: show,
          placeItems: "center",
          backgroundColor: "rgb(100, 100, 100, 0.6)",
        }}
      >
        <div
          style={{
            background: "white",
            boxShadow: "2px 2px 10px 2px grey",
            border: "1px solid red",
            padding: "50px",
            borderRadius: "8px",
            position: "fixed",
          }}
        >
          <div>
            <h5>{errMsg}</h5>
            <button
              onClick={handleShow}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                fontWeight: "bolder",
                zIndex: "19",
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        </div>
      </div>
  );
};

export default Alert;
