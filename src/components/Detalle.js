import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Redirect from "./Redirect";

const Detalle = () => {
  const [movie, setMovie] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { movieID } = useParams();
  let base_url = "https://image.tmdb.org/t/p/w500";
  const { width } = useWindowSize();

  useEffect(() => {
    let endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=515d5b4cf4d8bf2c05c0be9aa5c6e539&language=en-US`;
    const getMovies = async () => {
      try {
        const res = await axios.get(endPoint);
        setMovie(res.data);
        console.log(res.data);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    getMovies();
  }, [movieID]);

  return (
    <>
      <Redirect />
      <div style={{ width: "80%", margin: "20px auto" }}>
        {isLoading && (
          <p style={{ textAlign: "center", padding: "10em" }}>Cargando..</p>
        )}
        {!isLoading && errMsg && (
          <p style={{ textAlign: "center", padding: "10em", color: "red" }}>
            {errMsg}
          </p>
        )}
        {!isLoading && !errMsg && (
          <>
            <article
              style={{
                display: "flex",
                flexDirection: width < 768 ? "column" : "row",
                boxShadow: "2px 2px 10px 1px grey",
                borderRadius: "6px",
                marginTop: "50px",
              }}
            >
              <img
                src={base_url + movie.poster_path}
                alt={movie.title}
                style={{
                  borderRadius: width < 768 ? "6px 6px 0 0" : "6px 0 0 6px",
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "400px"
                }}
              />
              <div style={{ padding: "10px 10px 20px 10px", color: "grey" }}>
                <h2 style={{ padding: "10px 0", color: "black" }}>
                  {movie.title}
                </h2>
                <small
                  style={{
                    background: "#447CAD",
                    color: "white",
                    padding: "2px",
                    margin: "0px 10px 0 0",
                    borderRadius: "4px",
                  }}
                >
                  {movie.vote_average}
                </small>
                <small>&#128100; {movie.vote_count}</small> <br />
                <p
                  style={{
                    fontSize: "14px",
                    padding: "6px 0",
                  }}
                >
                  {movie.overview}
                </p>
                <small>{movie.release_date}</small>
                <div style={{ padding: "6px 0" }}>
                  {movie.genres.map((gen) => (
                    <small key={gen.id}>{gen.name} | </small>
                  ))}
                </div>
                {movie.homepage === "" ? null : (
                  <button
                    style={{
                      border: "1px solid #447CAD",
                      borderRadius: "4px",
                      padding: "4px",
                      background: "transparent",
                    }}
                  >
                    <a
                      href={movie.homepage}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#447CAD",
                      }}
                    >
                      Sitio web
                    </a>
                  </button>
                )}
              </div>
            </article>
            <div
              style={{
                margin: "20px 0",
                display: "flex",
                gap: "4rem",
                flexWrap: "wrap",
              }}
            >
              {movie.production_companies.map((prod) => (
                <img
                  key={prod.id}
                  src={base_url + prod.logo_path}
                  alt={prod.name}
                  width="auto"
                  height="30vh"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Detalle;
