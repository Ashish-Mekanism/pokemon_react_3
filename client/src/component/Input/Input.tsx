import React from 'react';
import './input.scss';

const Input = ({
  placeholder,
  type,
  value,
  name,
  handleChange,
  handleBlur,
}) => {
  return (
    <input
      className={`inputbox `}
      onBlur={handleBlur}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};
export default Input;
