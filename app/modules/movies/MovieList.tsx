import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const onClickMovie = (movieId: string) => {
    return navigate(`/movies/${movieId}`);
  };

  return (
    <>
      {movies.map(movie => {
        return (
          <div onClick={() => onClickMovie(movie._id)}>
            <h1>{movie.title}</h1>
          </div>
        );
      })}
    </>
  );
}
