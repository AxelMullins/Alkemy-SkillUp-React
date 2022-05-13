import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import Redirect from "./Redirect";
import MovieCard from "./MovieCard";

const Favoritos = () => {
  const { favoritos } = useContext(FavContext);

  return (
    <>
      <Redirect />
      <div style={{ width: "80%", margin: "20px auto 40px auto" }}>
        <h2 style={{ padding: "10px 0" }}>Favoritos</h2>
        {favoritos.length <= 0 && (
          <p style={{ textAlign: "center", padding: "10em", color: "black" }}>
            No hay favoritos
          </p>
        )}
        {favoritos.length >= 1 && (
          <section
            style={{
              display: "grid",
              gridGap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {favoritos.map((movie) => (
              <MovieCard key={movie.id} movie={movie} base_url={""} />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Favoritos;
