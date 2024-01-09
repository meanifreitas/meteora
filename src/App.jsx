import './App.css';
import { Header } from './Components/Header';
import { Carousel } from './Components/Carousel';
import { Categories } from './Components/Categories';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <section className='categories'>
        <Categories />
      </section>

    </>
  );
}

export default App;
