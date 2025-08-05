import React, { useEffect, useRef, useState } from 'react';
import './Searchbar.Styled.scss';
import Search from '../../assets/images/Search.png';

const Searchbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className='searchbarContainer'>
      <img
        className='searchIcon'
        src={Search}
        onClick={handleFocus}
      />
      <input
        className='inputbar'
        placeholder='Search by name'
      />
    </div>
  );
};

export default Searchbar;
