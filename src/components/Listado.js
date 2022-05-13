import Redirect from "./Redirect";
import useAxios from "../hooks/useAxios";
import MovieCard from "./MovieCard";

const Listado = ({ endPoint }) => {
  const { moviesList, errMsg, isLoading } = useAxios(endPoint);
  let base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Redirect />
      <div style={{ width: "80%", margin: "0 auto 40px auto" }}>
        <h2 style={{ padding: "10px 0" }}>Películas</h2>
        {isLoading && (
          <p style={{ textAlign: "center", padding: "10em" }}>Cargando..</p>
        )}
        {!isLoading && errMsg && (
          <p style={{ textAlign: "center", padding: "10em", color: "red" }}>
            {errMsg}
          </p>
        )}
        {!isLoading && !errMsg && moviesList.length === 0 && (
          <p style={{ textAlign: "center", padding: "10em", color: "black" }}>
            No se encontraron películas
          </p>
        )}
        {!isLoading && !errMsg && moviesList.length >= 1 && (
          <section
            style={{
              display: "grid",
              gridGap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {moviesList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} base_url={base_url} />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Listado;
