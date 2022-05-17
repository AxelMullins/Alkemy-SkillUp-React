import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FavContext } from "../context/FavContext";

const Header = () => {
  const { favoritos, isLogged } = useContext(FavContext);
  let token = sessionStorage.getItem("token");

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
        alignItems: "center",
        height: "80px",
        boxShadow: "2px 2px 10px 2px grey",
        position: "sticky",
        top: "0",
        zIndex: 99,
        background: "white",
      }}
    >
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <h3>
          Alkemy
          <br />
          Challenge
        </h3>
      </Link>
      {!isLogged && !token ? (
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
              <NavLink
                to="/movies"
                style={({ isActive }) => ({
                  color: isActive ? "#447CAD" : "black",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "inherit",
                })}
              >
                Películas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favoritos"
                style={({ isActive }) => ({
                  color: isActive ? "#447CAD" : "black",
                  textDecoration: "none",
                  position: "relative",
                  fontWeight: isActive ? "bold" : "inherit",
                })}
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
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
