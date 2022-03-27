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
          <p className='p-header'>Bonjour, je suis<span className='name'>Lucia Lebrun.</span></p>
          <Buttons 
              text={"Me découvrir"}
              link={"/me"}
          />
          <Buttons 
                text={"Mes projets"}
                link={"/projects"}
          />

          <div className='container_button'>
            <a className='buttons' href="/files/CV-Lucia_LEBRUN.pdf" download>
                Télécharger mon CV
            </a>
          </div>
        </div>
        <img src={ASSETS.meAvatar} alt="Avatar" className='avatar'/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
