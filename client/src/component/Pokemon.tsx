import React from 'react';
import Signup from '../assets/pages/auth/SignUp/Signup';
import Login from '../assets/pages/auth/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Pokemonpage from '../assets/pages/Pokemon/Pokemonpage/Pokemonpage';

const Pokemon = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/pokemon'
          element={<Pokemonpage />}
        />
      </Routes>
    </div>
  );
};

export default Pokemon;
