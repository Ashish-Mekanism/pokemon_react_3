import React from 'react';
import './Card.Styled.scss';
import typeColors from '../../type/types';

interface Props {
  id: number;
  name: string;
  types: string[]; // ✅ fixed type
  image: string;
}

const Card: React.FC<Props> = ({ id, name, types, image }) => {
  return (
    <div
      className='pokemon-card'
      style={{ backgroundColor: typeColors[types[0]] || '#666' }}
    >
      <div className='pokemon-header'>
        <span className='pokemon-id'>#00{id}</span>
      </div>

      <img
        src={image}
        className='pokemon-img'
        alt={name}
        loading='lazy'
      />

      <div className='innerContainer'>
        <h3
          className='pokemon-name'
          style={{ color: typeColors[types[0]] || '#666' }}
        >
          {name}
        </h3>
        <div className='skill'>
          {types.map((type, index) => (
            <p
              key={index}
              className='lableName'
              style={{ backgroundColor: typeColors[type] || '#666' }}
            >
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
