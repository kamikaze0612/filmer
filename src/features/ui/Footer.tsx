import { IconContext } from "react-icons";
import { FaCode } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-1 bg-stone-900 px-5 sm:gap-2 sm:px-10">
      <span className="flex items-center gap-1 text-sm font-bold text-stone-50 sm:text-base xl:text-xl">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <FaCode />
        </IconContext.Provider>
        Designed and coded by{" "}
        <a
          href="https://kamikaze0612.github.io/"
          className="text-sm text-stone-300 hover:text-stone-400 sm:text-base xl:text-xl"
        >
          Buyantogtokh B.
        </a>
      </span>
      <p className="text-xs font-medium text-stone-400 sm:text-sm xl:text-base">
        &copy; Filmer 2023. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
