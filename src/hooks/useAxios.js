import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (endPoint) => {
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

  return { moviesList, errMsg, isLoading };
};

export default useAxios;
