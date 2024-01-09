import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import useDeviceType from '../Hooks/useDevideType';
import DesktopLogo from '../assets/desktop/logo.png';
import MobileLogo from '../assets/Mobile/logo.png';
import TabletLogo from '../assets/Tablet/logo.png';
import Input from './Input';
import Button from './Button';

export function Header () {
  const logo = useDeviceType === 'mobile' ? MobileLogo : useDeviceType === 'tablet' ? TabletLogo : DesktopLogo;
  return (<>
    <header>
      <div className={styles.wrapper}>
        <img src={logo} alt="Meteora logo" />
        <nav className={styles.nav}>
          <Link to='/'>Home</Link>
          <Link to='/stores'>Stores</Link>
          <Link to='/newest'>Newest</Link>
          <Link to='/sale'>Sale</Link>
        </nav>
      </div>
      <div className={styles.search}>
        <Input type='text' name='search' placeHolder='Search a product' />
        <Button>Search</Button>
      </div>
    </header>
      <div className={styles.mobileSearch}>
        <Input type='text' name='search' placeHolder='Search a product' />
        <Button>Search</Button>
      </div>
    </>);
}