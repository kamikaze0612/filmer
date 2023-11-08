/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type MoviesContext = {
  query: string;
  onSearch: () => void;
};

type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type FetchMoviesFuncType = (q: string) => Promise<void>;

const initialState = {
  query: "",
  setQuery: function () {} as Dispatch<SetStateAction<string>>,
  movies: [] as MovieType[],
  fetchMovies: function () {} as unknown as FetchMoviesFuncType,
  watchedMovies: [],
  setWatchedMovies: function () {},
};

const MoviesContext = createContext(initialState);

type ProviderProps = {
  children: ReactNode;
};

const API_KEY = "a2f79f89";

export default function MoviesContextProvider({ children }: ProviderProps) {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const fetchMovies = async function (query: string) {
    try {
      if (query !== "") {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
        );
        const data = await res.json();
        setMovies(data.Search);
      }
    } catch (err) {
      console.log(err);
      throw new Error("There is an error💥");
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        query,
        setQuery,
        movies,
        fetchMovies,
        watchedMovies,
        setWatchedMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}

export { useMovies };
