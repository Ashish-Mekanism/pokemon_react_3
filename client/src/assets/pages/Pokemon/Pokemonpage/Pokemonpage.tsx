import React from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../../../../component/Searchbar/Searchbar';
import './Pokemon.Styled.scss';
import Card from '../../../../component/Card/Card';

const Pokemonpage = () => {
  return (
    <div>
      <Navbar />
      <div className='outer'>
        <div className='outerContainert'>
          <Searchbar />
          <div className='pokemonlist'>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemonpage;
