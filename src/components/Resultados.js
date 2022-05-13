import { useParams } from "react-router-dom";
import Buscador from "./Buscador";
import Listado from "./Listado";

const Resultados = () => {
  const { resultados } = useParams();
  let endPoint = `https://api.themoviedb.org/3/search/movie?api_key=515d5b4cf4d8bf2c05c0be9aa5c6e539&language=en-US&page=1&include_adult=false&query=${resultados}`;

  return (
    <>
      <Buscador />
      <Listado endPoint={endPoint} />
    </>
  );
};

export default Resultados;
