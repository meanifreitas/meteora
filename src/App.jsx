import './App.css';
import { Header } from './Components/Header';
import { Carousel } from './Components/Carousel';
import { Categories } from './Components/Categories';
import { Cards } from './Components/Cards';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <section className='categories'>
        <Categories />
      </section>
      <Cards />
    </>
  );
}

export default App;
