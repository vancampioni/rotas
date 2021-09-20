import './App.css';
import Header from '../header/Header'
import Home from '../../home/Home'
import Harley from '../harley/Harley'
import Honda from '../honda/Honda'
import Lambretta from '../lambretta/Lambretta'
import Suzuki from '../suzuki/Suzuki'
import Yamaha from '../yamaha/Yamaha'
import Cruiser from '../harley/cruiser/Cruiser'
import GrandAmericanTouring from '../harley/grandAmericanTouring/GrandAmericanTouring'
import Lowrider from '../harley/cruiser/lowrider/Lowrider'
import Sportglide from '../harley/cruiser/sportglide/Sportglide'
import Roadglide from '../harley/grandAmericanTouring/roadglide/Roadglide'
import Roadking from '../harley/grandAmericanTouring/roadking/Roadking'
import Adventure from '../honda/adventure/Adventure'
import Street from '../honda/street/Street'
import Crossover from '../honda/adventure/crossover/Crossover';
import Scooter from '../honda/adventure/scooter/Scooter';
import CB500X from '../honda/adventure/crossover/CB500X/CB500X';
import NC750X from '../honda/adventure/crossover/NC750X/NC750X';
import HondaADV from '../honda/adventure/scooter/HondaADV/HondaADV';
import XADV from '../honda/adventure/scooter/XADV/XADV';
import City from '../honda/street/city/City';
import Naked from '../honda/street/naked/Naked';
import CG160Fan from '../honda/street/city/CG160Fan/CG160Fan'
import CG160Start from '../honda/street/city/CG160Start/CG160Start'
import CB500F from '../honda/street/naked/CB500F/CB500F'
import CBTwister from '../honda/street/naked/CBTwister/CBTwister'
import ModeloA from '../lambretta/modeloA/ModeloA';
import ModeloB from '../lambretta/modeloB/ModeloB';
import Lambretta125M from '../lambretta/modeloA/Lambretta125M/Lambretta125M'
import Lambretta125B from '../lambretta/modeloB/lambretta125B/Lambretta125B'
import Hayabusa from '../suzuki/HAYABUSA/Hayabusa';
import Candy from '../suzuki/HAYABUSA/candy/Candy';
import Gray from '../suzuki/HAYABUSA/gray/Gray';
import Urbano from '../yamaha/urbano/Urbano';
import Factor125 from '../yamaha/urbano/factor125/Factor125';
import Fazer150 from '../yamaha/urbano/fazer150/Fazer150';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>

      <Header/>

      <main>

        <Switch>
          <Route exact path = "/home" render = {(props) => <Home/>}></Route>
          <Route exact path = "/harley" render = {(props) => <Harley/>}></Route>
          <Route exact path = "/honda" render = {(props) => <Honda/>}></Route>
          <Route exact path = "/lambretta" render = {(props) => <Lambretta/>}></Route>
          <Route exact path = "/suzuki" render = {(props) => <Suzuki/>}></Route>
          <Route exact path = "/yamaha" render = {(props) => <Yamaha/>}></Route>


          <Route exact path = "/cruiser" render = {(props) => <Cruiser/>}></Route>
          <Route exact path = "/grandAmericanTouring" render = {(props) => <GrandAmericanTouring/>}></Route>
          <Route exact path = "/lowRider" render = {(props) => <Lowrider/>}></Route>
          <Route exact path = "/sportglide" render = {(props) => <Sportglide/>}></Route>
          <Route exact path = "/roadglide" render = {(props) => <Roadglide/>}></Route>
          <Route exact path = "/roadking" render = {(props) => <Roadking/>}></Route>
          
          
          <Route exact path = "/adventure" render = {(props) => <Adventure/>}></Route>
          <Route exact path = "/street" render = {(props) => <Street/>}></Route>
          <Route exact path = "/crossover" render = {(props) => <Crossover/>}></Route>
          <Route exact path = "/scooter" render = {(props) => <Scooter/>}></Route>
          <Route exact path = "/CB500X" render = {(props) => <CB500X/>}></Route>
          <Route exact path = "/NC750X" render = {(props) => <NC750X/>}></Route>
          <Route exact path = "/HondaADV" render = {(props) => <HondaADV/>}></Route>
          <Route exact path = "/XADV" render = {(props) => <XADV/>}></Route>
          <Route exact path = "/city" render = {(props) => <City/>}></Route>
          <Route exact path = "/naked" render = {(props) => <Naked/>}></Route>
          <Route exact path = "/CG160Fan" render = {(props) => <CG160Fan/>}></Route>
          <Route exact path = "/CG160Start" render = {(props) => <CG160Start/>}></Route>
          <Route exact path = "/CB500F" render = {(props) => <CB500F/>}></Route>
          <Route exact path = "/CBTwister" render = {(props) => <CBTwister/>}></Route>


          <Route exact path = "/modeloA" render = {(props) => <ModeloA/>}></Route>
          <Route exact path = "/modeloB" render = {(props) => <ModeloB/>}></Route>
          <Route exact path = "/lambretta125M" render = {(props) => <Lambretta125M/>}></Route>
          <Route exact path = "/lambretta125B" render = {(props) => <Lambretta125B/>}></Route>


       
          <Route exact path = "/hayabusa" render = {(props) => <Hayabusa/>}></Route>
          <Route exact path = "/candy" render = {(props) => <Candy/>}></Route>
          <Route exact path = "/Gray" render = {(props) => <Gray/>}></Route>


          <Route exact path = "/Urbano" render = {(props) => <Urbano/>}></Route>
          <Route exact path = "/Factor125" render = {(props) => <Factor125/>}></Route>
          <Route exact path = "/Fazer150" render = {(props) => <Fazer150/>}></Route>



        </Switch>

      </main>

    </div>
  )
}
        

  
  export default App;
  