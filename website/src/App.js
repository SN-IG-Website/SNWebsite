
import './App.css';
import Homepage from './pages/homepage';
import galleryback_granddinner from './components/galleryback_granddinner';

// import Gallery from './pages/gallery';
import Galleryfront from './components/galleryfront';
import { Route, Switch } from "react-router-dom";
import AboutComp from './components/AboutComp';
import InfraComp from './components/InfraComp';
import Galleryback from './components/galleryback';
import Alumni from './pages/alumni';

import gallerback_illu from './components/galleryback_illu';
import gallerback_republicday from './components/galleryback_republicday';
import AchievComp from './components/AchievComp';



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

        <Route path="/illu" component={gallerback_illu}/>
        <Route path="/republic" component={gallerback_republicday}/>
        <Route path="/grand-dinner" component={galleryback_granddinner}/>
        <Route path="/achievements" component={AchievComp}/>
        

     </Switch>
    </>

  );
}

export default App;
