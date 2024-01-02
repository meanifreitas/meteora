import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, ...props}) => {
  return (
    <button onClick={onClick}>{props.children}</button>
  );
}

export default Button;