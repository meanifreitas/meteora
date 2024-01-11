import styles from './Features.module.css';
import Pix from '../assets/icons/pix.png';
import Return from '../assets/icons/arrow-repeat.png';
import Flower from '../assets/icons/flower.png';

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper}>
        <img src={Pix} />
        <div className={styles.description}>
          <h3>Pay on Pix</h3>
          <p>Get 5% off</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <img src={Return} />
        <div className={styles.description}>
          <h3>Free return</h3>
          <p>Feel free to return until 30 days</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <img src={Flower} />
        <div className={styles.description}>
          <h3>Sustaintabilty</h3>
          <p>Accountable fashion, respecting the environment</p>
        </div>
      </div>
    </section>
  );  
}