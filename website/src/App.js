
import './App.css';
import Homepage from './pages/homepage';

// import Gallery from './pages/gallery';
import Galleryfront from './components/galleryfront';
import { Route, Switch } from "react-router-dom";
import AboutComp from './components/AboutComp';
import InfraComp from './components/InfraComp';
import Galleryback from './components/galleryback';
import Alumni from './pages/alumni';


function App() {
  return (
    <>
     <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/gallery" component={Galleryfront}/>
        <Route path="/gallery/label" component={Galleryback}/>
        <Route path="/about" component={AboutComp}/>
        <Route path="/infrastructure" component={InfraComp}/>
        <Route path="/alumni" component={Alumni}/>

     </Switch>
    </>

  );
}

export default App;
