
import './App.css';
import Homepage from './pages/homepage';
import galleryback_granddinner from './components/galleryback_granddinner';

// import Gallery from './pages/gallery';
import Galleryfront from './components/galleryfront';
import { Route, Routes, BrowserRouter, Switch} from "react-router-dom";
import AboutComp from './components/AboutComp';
import InfraComp from './components/InfraComp';
import infra from './components/infra';
import Galleryback from './components/galleryback';
import Alumni from './pages/alumni';

import gallerback_illu from './components/galleryback_illu';
import gallerback_republicday from './components/galleryback_republicday';
import AchievComp from './components/AchievComp';

import galleryback_classsong from './components/galleryback_classsong';
import galleryback_alumnimeet from './components/galleryback_alumni';
import Hall from './components/Hall';
import Teams2 from './components/Teams2';



function App() {
  return (
    <>
     <BrowserRouter basename='/index.html'>
      <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/gallery" component={Galleryfront}/>
          <Route path="/gallery/label" component={Galleryback}/>
          <Route path="/about" component={AboutComp}/>
          <Route path="/infrastructure" component={infra}/>
          <Route path="/alumni" component={Alumni}/>

          <Route path="/illu" component={gallerback_illu}/>
          <Route path="/republic" component={gallerback_republicday}/>
          <Route path="/grand-dinner" component={galleryback_granddinner}/>
          <Route path="/class-song" component={galleryback_classsong}/>
          <Route path="/achievements" component={AchievComp}/>
          <Route path="/alumni-meet" component={galleryback_alumnimeet}/>
          
          <Route path="/hall" component={Hall}/>
          <Route path="/teams2" component={Teams2}/>

      </Switch>
     </BrowserRouter>
    </>

  );
}

export default App;
