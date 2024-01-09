import styles from './Categories.module.css';
import useDeviceType from '../Hooks/useDevideType';

import TshirtsDesktop from '../assets/Desktop/Categories/t-shirts.png';
import TshirtsMobile from '../assets/Mobile/Categories/t-shirts.png';
import TshirtsTablet from '../assets/Tablet/Categories/t-shirts.png';

import BagsDesktop from '../assets/Desktop/Categories/bags.png';
import BagsMobile from '../assets/Mobile/Categories/bags.png';
import BagsTablet from '../assets/Tablet/Categories/bags.png';

import ShoesDesktop from '../assets/Desktop/Categories/shoes.png';
import ShoesMobile from '../assets/Mobile/Categories/shoes.png';
import ShoesTablet from '../assets/Tablet/Categories/shoes.png';

import PantsDesktop from '../assets/Desktop/Categories/pants.png';
import PantsMobile from '../assets/Mobile/Categories/pants.png';
import PantsTablet from '../assets/Tablet/Categories/pants.png';

import CoatsDesktop from '../assets/Desktop/Categories/coats.png';
import CoatsMobile from '../assets/Mobile/Categories/coats.png';
import CoatsTablet from '../assets/Tablet/Categories/coats.png';

import GlassesDesktop from '../assets/Desktop/Categories/glasses.png';
import GlassesMobile from '../assets/Mobile/Categories/glasses.png';
import GlassesTablet from '../assets/Tablet/Categories/glasses.png';

export function Categories() {
  const deviceType = useDeviceType();

  const categories = [{
    name: 'T-shirts',
    img: deviceType === 'mobile' ? TshirtsMobile : deviceType === 'tablet' ? TshirtsTablet : TshirtsDesktop
  }, {
    name: 'Bags',
    img: deviceType === 'mobile' ? BagsMobile : deviceType === 'tablet' ? BagsTablet : BagsDesktop
  }, {
    name: 'Shoes',
    img: deviceType === 'mobile' ? ShoesMobile : deviceType === 'tablet' ? ShoesTablet : ShoesDesktop
  }, {
    name: 'Pants',
    img: deviceType === 'mobile' ? PantsMobile : deviceType === 'tablet' ? PantsTablet : PantsDesktop
  }, {
    name: 'Coats',
    img: deviceType === 'mobile' ? CoatsMobile : deviceType === 'tablet' ? CoatsTablet : CoatsDesktop
  }, {
    name: 'Glasses',
    img: deviceType === 'mobile' ? GlassesMobile : deviceType === 'tablet' ? GlassesTablet : GlassesDesktop
  }];

  return (
    <section className={styles.wrapper}>
      <h3>Search by categories</h3>
      <div className={styles.content}>
        {categories.map(cat => {
          return (
            <div key={cat.name} className={styles.item}>
              <img src={cat.img} />
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}