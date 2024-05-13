import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies} from "../utils/movieSlice";



const usePopularMovies = () => {
  //Fetch Data from TMDB API and update store  
  const dispatch = useDispatch();
  
  const getPopularMoviess = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoviess();
  }, []);
};

export default usePopularMovies;