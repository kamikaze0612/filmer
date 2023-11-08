import { FormEvent } from "react";
import { useMovies } from "../../contexts/moviesContext";

function Searchbar() {
  const { query, setQuery: onChange, fetchMovies } = useMovies();
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    fetchMovies(query);
  }
  return (
    <form
      className="flex items-center gap-1 sm:gap-2 lg:gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-[140px] rounded-full border-2 border-stone-900 px-3 py-1 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-stone-500 sm:w-auto sm:text-base"
        placeholder="Search movies..."
        onChange={(e) => onChange(e.target.value)}
        value={query}
      />
      <button className="rounded-full bg-stone-600 px-2 py-1 text-xs font-semibold text-stone-50 hover:bg-stone-500 sm:px-4 sm:py-2 sm:text-sm">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
