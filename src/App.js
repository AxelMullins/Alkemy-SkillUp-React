import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import Peliculas from "./components/Peliculas";
import { FavProvider } from "./context/FavContext";

function App() {
  return (
    <FavProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Peliculas />} />
        <Route path="/detalle/:movieID" element={<Detalle />} />
        <Route path="/resultados/:resultados" element={<Resultados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </FavProvider>
  );
}

export default App;
