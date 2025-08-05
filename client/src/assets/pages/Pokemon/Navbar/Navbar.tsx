import React from 'react';
import Pokedex from '../../../images/pokeball.png';
import './Navbar.Style.scss';
import Avtar from '../../../images/Avtar.png';
import Arrow from '../../../images/Vector.png';

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='leftSide'>
          <img
            className='icon'
            src={Pokedex}
          />
          <p className='pokedex'>Pokédex</p>
        </div>
        <div className='rightSide'>
          <img
            className='userAvtar'
            src={Avtar}
          />
          <img
            className='downArrow'
            src={Arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
