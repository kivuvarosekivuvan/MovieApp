import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetMovies from './Components/getMovies';
import Navigation from './Navigation';
import Search from './Search/Search';
import MyList from './Navigation/MyList';
import SignIn from './Navigation/SignIn';
import Trending from './Components/Trending/trending';
import Categories from './Components/Categories/categories';
import Footer from './Footer/footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Search />
        {/* <Trending /> */}
        <Categories />
        <GetMovies />
        {/* <Footer/> */}
        <Routes>
          <Route path="/mylist" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

