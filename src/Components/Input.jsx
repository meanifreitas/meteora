import styles from './Input.module.css';

export function Input({name, type, placeHolder, onChange}) {
  return (
    <input className={styles.input} type={type} name={name} placeholder={placeHolder} onChange={onChange} />
  );
}