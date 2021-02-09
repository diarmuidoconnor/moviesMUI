import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <GenresContextProvider>   {/* NEW */}
          <Switch>
          <Route
                    exact
                    path="/reviews/form"
                    component={AddMovieReviewPage}
                  />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route
              exact
              path="/movies/upcoming"
              component={UpcomingMoviesPage}
            />
            <Route
              exact
              path="/movies/favorites"
              component={FavoriteMoviesPage}
            />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </GenresContextProvider>    {/* NEW */}
      </MoviesContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
