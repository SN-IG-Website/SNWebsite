//import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
import Teams from './components/Teams';

import {BrowserRouter as Router} from 'react-router-dom' ;

function App() {
  return (
    <Router>
    {/* <div className= "top-heading">
       <center><h1 className="heading">Sarojini Naidu/Indira Gandhi Hall of Residence</h1></center> 
    </div> */}

     <Teams/>
    </Router>
  );
}

export default App;


