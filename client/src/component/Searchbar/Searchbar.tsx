import React, { useRef } from 'react';
import './Searchbar.Styled.scss';
import Search from '../../assets/images/Search.png';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<Props> = ({ value, onChange }) => {
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
        alt='Search Icon'
      />
      <input
        type='text'
        className='inputbar'
        placeholder='Search by name'
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbar;
