import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const NavBar = lazy(() => import('./NavBar/NavBar'));
// import NavBar from './NavBar/NavBar';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const SingleMovieCastPage = lazy(() =>
  import('./pages/SingleMovieCastPage/SingleMovieCastPage')
);
const SingleMovieReviewsPage = lazy(() =>
  import('./pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Loader = lazy(()=>import("../shared/Loader/LoaderSpinner"));
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import SingleMovieCastPage from './pages/SingleMovieCastPage/SingleMovieCastPage';
// import SingleMovieReviewsPage from './pages/SingleMovieReviewsPage/SingleMovieReviewsPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="goit-react-hw-05-movies">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<SingleMovieCastPage />} />
            <Route path="reviews" element={<SingleMovieReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
