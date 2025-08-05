// import React from 'react';
// import './Card.Styled.scss';
// import Image from '../../assets/images/image.png';

// const Card = () => {
//   return (
//     <div className='outersideContainer'>
//       <p className='id'>#0001</p>
//       <img
//         className='pokemonImg'
//         src={Image}
//       />
//       <div className='innerContainer'>
//         <p className='pokemonName'></p>
//         <div className='skillContainer'>
//           <label className='skillLable'></label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import './Card.Styled.scss';
import Image from '../../assets/images/image.png';

const PokemonCard = () => {
  return (
    <div className='pokemon-card'>
      <div className='pokemon-header'>
        <span className='pokemon-id'>#001</span>
      </div>
      <div className='image'>
        <img
          src={Image}
          className='pokemon-img'
        />
      </div>
      <div className='innerContainer'>
        <h3 className='pokemon-name'>Balbasor</h3>
        <div className='skill'>
          <p className='lableName'>Grass</p>
          <p className='lableName'>Poison</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
