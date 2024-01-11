import './App.css';
import { Header } from './Components/Header';
import { Carousel } from './Components/Carousel';
import { Categories } from './Components/Categories';
import { Cards } from './Components/Cards';
import { Features } from './Components/Features';


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <section className='categories'>
        <Categories />
      </section>
      <Cards />
      <Features />
    </>
  );
}

export default App;
