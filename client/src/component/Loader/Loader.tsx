import React from 'react';
import './Loader.Style.scss';

const Loader = () => {
  return (
    <div className='loaderOverlay'>
      <div className='loaderBox'>
        <div className='spinner'></div>
        <p className='loaderName'>PLEASE WAIT WHILE WE ARE SIGNING YOU IN</p>
      </div>
    </div>
  );
};

export default Loader;
