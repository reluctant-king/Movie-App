import React, { createContext, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import NewArrivals from "./New Arrivals";
import ComingSoon from "./Coming Soon";
import TopRated from "./Top Rated";
import Genres from "./Genres";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { comedyMovies, latestMovies, popularMovies } from "../Urls";
import Movies from "./Movies";
import Banner from "./Banner";
import Detailpage from "./Detailpage";

const MovieContext = createContext();

const App = () => {
  const [moviedetails, setmoviedetails] = useState([]);

  const [first, setfirst] = useState(true);

  return (
    <div>
      <MovieContext.Provider value={{ moviedetails, setmoviedetails }}>
        <BrowserRouter>
          <NavigationBar />
          {first ? (
            <>
              <Banner />
              <Home />
            </>
          ) : null}
          <Routes>
            <Route
              path="/new-arrivals"
              element={
                <Movies
                  movies={latestMovies}
                  title="New Arrivals"
                  setfirst={setfirst}
                />
              }
            />
            <Route
              path="/coming-soon"
              element={
                <Movies
                  movies={comedyMovies}
                  title="Coming Soon"
                  setfirst={setfirst}
                />
              }
            />
            <Route
              path="/top-rated"
              element={
                <Movies
                  movies={popularMovies}
                  title="Top Series"
                  setfirst={setfirst}
                />
              }
            />
            <Route
              path="/detailpage/:MId"
              element={<Detailpage setfirst={setfirst} />}
            />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
};

export default App;
export { MovieContext };
