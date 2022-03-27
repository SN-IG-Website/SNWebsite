
import './App.css';
import Homepage from './pages/homepage';
import Gallery from './pages/gallery';
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <>
     <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/gallery" component={Gallery}/>
     </Switch>
    </>
  );
}

export default App;
