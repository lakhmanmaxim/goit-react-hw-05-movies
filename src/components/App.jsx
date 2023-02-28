import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Movies from './pages/Movies/Movies';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
