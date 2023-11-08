import Header from "./features/ui/Header";
import Main from "./features/ui/Main";
import Footer from "./features/ui/Footer";
import MoviesContextProvider from "./contexts/moviesContext";

function App() {
  return (
    <div className="grid h-screen grid-rows-[70px_calc(100vh-140px)_70px] lg:grid-rows-[80px_calc(100vh-170px)_90px]">
      <MoviesContextProvider>
        <Header />
        <Main />
        <Footer />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
