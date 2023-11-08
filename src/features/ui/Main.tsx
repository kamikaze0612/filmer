import MoviesList from "../movies/MoviesList";
import WatchedMoviesList from "../movies/WatchedMoviesList";

function Main() {
  return (
    <main className="grid grid-rows-[1fr_1fr] bg-stone-600 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-4 lg:px-12 lg:py-4 2xl:px-16">
      <MoviesList />
      <WatchedMoviesList />
    </main>
  );
}

export default Main;
