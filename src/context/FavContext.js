import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [favsInLocal, setFavsInLocal] = useState("");

  useEffect(() => {
    if (favsInLocal) setFavsInLocal(localStorage.getItem("favs"));

    if (favsInLocal.length === 0) return;
    if (favsInLocal.length >= 1) {
      const favsArray = JSON.parse(favsInLocal);

      setFavoritos(favsArray);
    }
  }, [favsInLocal]);

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const poster_path = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h4").innerText;
    const overview = parent.querySelector("p").innerText;
    const id = btn.dataset.movieId;
    const movieData = { id, title, poster_path, overview };

    let movieIsInArray = tempMoviesInFavs.find(
      (movie) => movie.id === movieData.id
    );

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs);
    } else {
      tempMoviesInFavs = tempMoviesInFavs.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs);
    }
  };

  const data = { favoritos, isLogged, setIsLogged, addOrRemoveFromFavs };
  return <FavContext.Provider value={data}>{children}</FavContext.Provider>;
};

export { FavProvider };
