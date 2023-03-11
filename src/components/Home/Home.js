import React, { useEffect } from "react";
import MovieLising from "../MovieListing/MovieListing.js";
import movieApi from "../../common/apis/movieApi.js";
import { APIKey } from "../../common/apis/MovieApiKey.js";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice.js";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieLising />
    </>
  );
};

export default Home;
