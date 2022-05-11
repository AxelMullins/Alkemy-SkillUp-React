import React from "react";
import Buscador from "./Buscador";
import Listado from "./Listado";

const Peliculas = ({ addOrRemoveFromFavs }) => {
  let endPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=515d5b4cf4d8bf2c05c0be9aa5c6e539&language=en-US&page=1";
  return (
    <>
      <Buscador />
      <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} endPoint={endPoint} />
    </>
  );
};

export default Peliculas;
