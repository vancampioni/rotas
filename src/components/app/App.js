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
          <Route exact path = "/CB500X" render = {(props) => <CB500X/>}></Route>
          <Route exact path = "/NC750X" render = {(props) => <NC750X/>}></Route>

          <Route exact path = "/scooter" render = {(props) => <Scooter/>}></Route>


        </Switch>

      </main>

    </div>
  )
}
        

  
  export default App;
  