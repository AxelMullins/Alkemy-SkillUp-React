import { Link } from "react-router-dom";
import Redirect from "./Redirect";
import { BsHeartFill } from "react-icons/bs";

const Favoritos = ({ addOrRemoveFromFavs, favoritos }) => {
  // const [favoritos, setFavoritos] = useState([]);
  // const [favsInLocal, setFavsInLocal] = useState([]);

  // useEffect(() => {
  //   setFavsInLocal(localStorage.getItem("favs"));

  //   if (favsInLocal.length === 0) return;
  //   if (favsInLocal.length >= 1) {
  //     const favsArray = JSON.parse(favsInLocal);
  //     setFavoritos(favsArray);
  //   }
  // }, [favsInLocal]);

  return (
    <>
      <Redirect />
      <div style={{ width: "80%", margin: "20px auto 40px auto" }}>
        <h2 style={{ padding: "10px 0" }}>Favoritos</h2>
        {favoritos.length <= 0 && <p style={{ textAlign: "center", padding: "10em", color: "black" }}>No hay favoritos</p>}
        {favoritos.length >= 1 && (
          <section
            style={{
              display: "grid",
              gridGap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
            }}
          >
            {favoritos.map((movie) => (
              <article
                key={movie.id}
                style={{
                  boxShadow: "2px 2px 10px 1px grey",
                  borderRadius: "6px",
                  position: "relative",
                }}
              >
                <img
                  src={movie.imgURL}
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
                      border: "1px solid grey",
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

export default Favoritos;
