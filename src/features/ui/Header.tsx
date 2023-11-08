import logo from "../../img/movie.png";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header className="flex items-center justify-between bg-stone-900 px-5 sm:px-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo of Filmer" className="w-6 lg:w-12" />
        <h2 className="text-xl font-semibold text-stone-50 lg:text-3xl">
          FILMER
        </h2>
      </div>
      <span className="justify-self-center">
        <Searchbar />
      </span>
    </header>
  );
}

export default Header;
