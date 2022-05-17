import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FavContext } from "../context/FavContext";
import axios from "axios";
import Alert from "./Alert";

const Login = () => {
  const { setIsLogged } = useContext(FavContext);
  const [show, setShow] = useState("none");
  const [errMsg, setErrMsg] = useState("");
  const handleShow = () => {
    setShow("none");
    setErrMsg("");
  };
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      setShow("grid");
      setErrMsg("Los campos no pueden estar vacíos");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      setShow("grid");
      setErrMsg("Debes escribir una dirección válida");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      setShow("grid");
      setErrMsg("Credenciales incorrectas");
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org/", { email, password })
      .then((res) => {
        setShow("grid");
        const tokenRes = res.data.token;
        sessionStorage.setItem("token", tokenRes);
        setIsLogged(true);
        navigate("/movies");
      });
  };

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/movies" />}
      {!token && (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            padding: "40px 0",
          }}
        >
          <h2>Formulario de Login</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80vw",
              maxWidth: "300px",
            }}
          >
            <label htmlFor="email" style={{ paddingTop: "10px" }}>
              <span>Email:</span>
              <br />
              <input
                type="text"
                name="email"
                placeholder="challenge@alkemy.org"
                id="email"
                style={{ width: "100%", padding: "6px", borderRadius: "4px" }}
              />
            </label>
            <label htmlFor="password" style={{ paddingTop: "10px" }}>
              <span>Password:</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="react"
                id="password"
                style={{ width: "100%", padding: "6px", borderRadius: "4px" }}
              />
            </label>
            <button
              type="submit"
              style={{
                marginTop: "20px",
                padding: "6px",
                borderRadius: "4px",
                background: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Ingresar
            </button>
          </form>
          <Alert errMsg={errMsg} show={show} handleShow={handleShow} />
        </div>        
      )}
    </>
  );
};

export default Login;
