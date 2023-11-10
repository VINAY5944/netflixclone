import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import Poster from './poster/Poster';
import { action,originals,RomanceMovies,ComedyMovies,Documentaries } from './urls';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Poster url={originals} title='Netflix Originals'/>
    <Poster url={action}title='Action Movies' isSmall/>
    <Poster url={RomanceMovies}title='Romance Movies' isSmall/>
    <Poster url={ComedyMovies}title='Comedy Movies' isSmall/>
    <Poster url={Documentaries}title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
