import React from 'react';
import styles from './Input.module.css';

const Input = ({name, type, placeHolder, onChange}) => {
  return (
    <input type={type} name={name} placeholder={placeHolder} onChange={onChange} />
  );
}

export default Input;