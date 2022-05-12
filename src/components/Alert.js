import React from "react";
import {VscError} from 'react-icons/vsc'

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
            padding: "50px",
            borderRadius: "8px",
            position: "fixed",
          }}
        >
          <div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <VscError style={{color: "red", fontSize: "4em"}}/>
            <h4 style={{color: "red",  padding: "10px"}}>Error</h4>
            <h5 style={{color: "grey", padding: "10px"}}>{errMsg}</h5>
            <button
              onClick={handleShow}
              style={{
                background: "red",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bolder",
                color: "white",
                cursor: "pointer",
                marginTop: "10px",
                padding: "10px"
              }}
            >
              Volver a intentarlo
            </button>
          </div>
        </div>
      </div>
  );
};

export default Alert;
