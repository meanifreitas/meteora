import styles from './Button.module.css';

export function Button ({onClick, ...props}) {
  return (
    <button onClick={onClick} className={styles.button}>{props.children}</button>
  );
}