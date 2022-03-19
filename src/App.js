import './App.css';
import ASSETS from './assets';
import { Buttons } from './components';
import { Footer, Navbar } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="Menu">
          <Buttons 
              text={"Me découvrir"}
              link={"/me"}
          />
          <Buttons 
                text={"Mes projets"}
                link={"/projects"}
          />
          <Buttons 
                text={"Télécharger mon CV"}
                link={"/data/CV-Lucia_LEBRUN.pdf"}
          />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
