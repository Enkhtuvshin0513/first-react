import { MovieDetail } from "~/modules/movies/MovieDetail";

export default function MovieDetailRouter({ params }) {
  return <MovieDetail movieId={params.movieId} />;
}
