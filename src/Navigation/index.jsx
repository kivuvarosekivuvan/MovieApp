import React from 'react';
import './Navigation.css';
import Home from './Home';
import MyList from './MyList';
import SignIn from './SignIn';
import Movie from './Movie';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Movie/>
      <Home />
      <MyList />
      <SignIn />
    </nav>
  );
};

export default Navigation;