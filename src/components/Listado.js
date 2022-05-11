import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import Redirect from "./Redirect";

const Listado = ({ addOrRemoveFromFavs, endPoint }) => {
  let base_url = "https://image.tmdb.org/t/p/w500";
  const [moviesList, setMoviesList] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(endPoint);
        setMoviesList(res.data.results);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [endPoint]);

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
              <article
                key={movie.id}
                style={{
                  boxShadow: "2px 2px 10px 1px grey",
                  borderRadius: "6px",
                  position: "relative",
                }}
              >
                <img
                  src={base_url + movie.poster_path}
                  alt={movie.title}
                  width="100%"
                  style={{ borderRadius: "6px 6px 0 0" }}
                />
                <div style={{ padding: "10px 10px 20px 10px" }}>
                  <h4
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {movie.title}
                  </h4>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      paddingTop: "6px",
                    }}
                  >
                    {movie.overview.length <= 100
                      ? movie.overview
                      : movie.overview.slice(0, 100) + "..."}
                  </p>
                  <button
                    style={{
                      marginTop: "14px",
                      padding: "4px",
                      background: "green",
                      borderRadius: "4px",
                      border: "none",
                    }}
                  >
                    <Link
                      to={`/detalle/${movie.id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Detalles
                    </Link>
                  </button>
                </div>

                <BsHeartFill
                  data-movie-id={movie.id}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    color: "#dedede",
                    cursor: "pointer",
                  }}
                  onClick={addOrRemoveFromFavs}
                />
              </article>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Listado;
