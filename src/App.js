import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import Peliculas from "./components/Peliculas";
import { useEffect, useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [favoritos, setFavoritos] = useState([]);
  const [favsInLocal, setFavsInLocal] = useState("")

  useEffect(() => {
    setFavsInLocal(localStorage.getItem("favs"))

    if (favsInLocal.length === 0) return;
    if (favsInLocal.length >= 1) {
      const favsArray = JSON.parse(favsInLocal);
      
      setFavoritos(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
      console.log(tempMoviesInFavs);
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
      console.log(tempMoviesInFavs);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h4").innerText;
    const overview = parent.querySelector("p").innerText;
    const id = btn.dataset.movieId;
    const movieData = { id, title, imgURL, overview };
    let movieIsInArray = tempMoviesInFavs.find(
      (movie) => movie.id === movieData.id
    );
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs)
      console.log("Se agregó la pelicula");
    } else {
      tempMoviesInFavs = tempMoviesInFavs.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs)
      console.log("Se eliminó la pelicula");
    }
  };

  return (
    <>
      <Header favoritos={favoritos} isLogged={isLogged}/>
      <Routes>
        <Route path="/" element={<Login setIsLogged={setIsLogged}/>} />
        <Route
          path="/movies"
          element={<Peliculas addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detalle/:movieID" element={<Detalle />} />
        <Route
          path="/resultados/:resultados"
          element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route
          path="/favoritos"
          element={
            <Favoritos
              addOrRemoveFromFavs={addOrRemoveFromFavs}
              favoritos={favoritos}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
