import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const MovieCard = ({ movie, base_url }) => {
  const { addOrRemoveFromFavs, favoritos } = useContext(FavContext);
  return (
    <article
      style={{
        boxShadow: "2px 2px 10px 1px grey",
        borderRadius: "6px",
        position: "relative",
        maxWidth: "300px"
      }}
    >
      <img
        src={`${base_url}${movie.poster_path}`}
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
          color:
            undefined === favoritos.find((el) => el.id === `${movie.id}`)
              ? "#dedede"
              : "red",
          cursor: "pointer",
        }}
        onClick={addOrRemoveFromFavs}
      />
    </article>
  );
};

export default MovieCard;
