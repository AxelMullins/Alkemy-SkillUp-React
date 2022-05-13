import { useState } from "react";
import Buscador from "./Buscador";
import Listado from "./Listado";
import PrevAndNext from "./PrevAndNext";

const Peliculas = () => {
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    page === 1 ? setPage(1) : setPage((pp) => pp - 1);
  };
  const handleNext = () => {
    page === 33526 ? setPage(33526) : setPage((pp) => pp + 1);
  };

  let endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=515d5b4cf4d8bf2c05c0be9aa5c6e539&language=en-US&page=${page}`;
  return (
    <>
      <Buscador />
      <Listado endPoint={endPoint} />
      <PrevAndNext
        handlePrev={handlePrev}
        handleNext={handleNext}
        page={page}
      />
    </>
  );
};

export default Peliculas;
