import styles from './Cards.module.css';

import Tshirt from '../assets/cards/t-shirt.png';
import Pants from '../assets/cards/pants.png';
import Sneakers from '../assets/cards/sneakers.png';
import Jacket from '../assets/cards/jacket.png';
import Glasses from '../assets/cards/glasses.png';
import Bag from '../assets/cards/bag.png';

const products = [{
  id: 1,
  img: Tshirt,
  title: 'Comfy t-shirt',
  description: 'Multicolors and sizes. 100% cotton fabric, cool for summer. Unisex design.',
  price: 70
}, {
  id: 2,
  img: Pants,
  title: 'Tailored pants',
  description: 'Wide leg design, made of linen. A piece for a lifetime!',
  price: 180
}, {
  id: 3,
  img: Sneakers,
  title: 'Chuncky sneakers',
  description: 'Casual sneaker with a higher sole and robust design. Unisex model.',
  price: 250
}, {
  id: 4,
  img: Jacket,
  title: 'Jeans jacket',
  description: 'Unisex oversized model with suede collar. Timeless and authentic!',
  price: 150
}, {
  id: 5,
  img: Glasses,
  title: 'Rounded glasses',
  description: 'Metallic graphite frame with rounded lenses. No mistake!',
  price: 120
}, {
  id: 6,
  img: Bag,
  title: 'Go-to bag',
  description: 'A high-durability synthetic leather bag in camel color. Ideal to accompany you for a lifetime!',
  price: 120
}];

export function Cards() {
  return (
    <section className={styles.wrapper}>
      <h3>Products that are on top!</h3>
      <div className={styles.content}>
        {products.map(prod => {
          return (
            <div key={prod.id} className={styles.item}>
              <img src={prod.img} />
              <div className={styles.productInfo}>
                <h3 className={styles.title}>{prod.title}</h3>
                <p className={styles.description}>{prod.description}</p>
                <p className={styles.price}>${prod.price}</p>
                <button>See more</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}