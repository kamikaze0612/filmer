import { useMovies } from "../../contexts/moviesContext";
import MovieItem from "./MovieItem";

function MoviesList() {
  const { movies } = useMovies();

  return (
    <div className="overflow-y-auto bg-stone-900 px-4 lg:rounded-lg">
      {movies.length > 0 ? (
        <ul className="flex flex-col gap-2 p-4 sm:gap-3 lg:gap-4">
          {movies.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              year={movie.Year}
              title={movie.Title}
              poster={movie.Poster}
            />
          ))}
        </ul>
      ) : (
        <p className="py-5 text-center font-semibold text-white ">
          Search for movies 😊
        </p>
      )}
    </div>
  );
}

export default MoviesList;
