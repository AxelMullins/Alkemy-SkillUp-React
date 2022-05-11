import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Buscador = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState("none");
  const [errMsg, setErrMsg] = useState("");
  const handleShow = () => {
    setShow("none");
    setErrMsg("");
  };
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let resultados = search.trim().toLowerCase();

    if (resultados.length < 4) {
      setShow("grid");
      setErrMsg("La búsqueda debe tener más de 4 caracteres");
    } else {
      navigate(`/resultados/${resultados}`);
      setSearch("");
    }
  };

  return (
    <>
      <Alert errMsg={errMsg} show={show} handleShow={handleShow} />
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", alignItems: "center", width: "80%", margin: "40px auto 20px auto" }}
      >
        <label htmlFor="search" hidden>
          Buscar
        </label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar una película.."
          type="text"
          name="search"
          id="search"
          style={{
            width: "100%",
            padding: "6px",
            border: "1px solid grey",
            borderRadius: "4px 0 0 4px",
            borderRight: "none",
            height: "auto",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "4px 6px",
            border: "1px solid grey",
            borderLeft: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
            background: "transparent",
            height: "30px",
            display: "flex",
          }}
          >
          <span style={{ padding: "0 8px", color: "grey"}}>| </span>
          <FaSearch size="16px" color="grey" />
        </button>
      </form>
    </>
  );
};

export default Buscador;
