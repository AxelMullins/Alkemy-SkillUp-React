import { Link } from "react-router-dom";

const Header = ({ favoritos, isLogged }) => {

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
        alignItems: "center",
        height: "80px",
        boxShadow: "2px 2px 10px 2px grey",
      }}
    >
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <h3>
          Alkemy
          <br />
          Challenge
        </h3>
      </Link>
      {!isLogged ? (
        <button
          style={{
            background: "green",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <h3>Login</h3>
          </Link>
        </button>
      ) : (
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "12px",
              listStyle: "none",
              textDecoration: "none",
            }}
          >
            <li>
              <Link
                to="/movies"
                style={{ color: "black", textDecoration: "none" }}
              >
                Películas
              </Link>
            </li>
            <li>
              <Link
                to="/favoritos"
                style={{
                  color: "black",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                Favoritos{" "}
                {favoritos.length >= 1 && (
                  <span
                    style={{
                      background: "green",
                      color: "white",
                      height: "20px",
                      width: "20px",
                      textAlign: "center",
                      padding: "4px",
                      fontSize: "10px",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "-14px",
                      top: "-14px",
                    }}
                  >
                    {favoritos.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
