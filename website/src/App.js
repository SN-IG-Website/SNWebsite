//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Link} from "react-router-dom";


function App() {
  return (
    <>
    <div class= "top-heading">
       <center><h1 class="heading">Sarojini Naidu/Indira Gandhi Hall of Residence</h1></center> 
    </div>
     <Navbar/>
    <img class="snig-image"src="https://lh5.googleusercontent.com/p/AF1QipMGTDl2pC0l7ZP6q6OT2af1IJNZGwJy8dj5oCI8=w1080-k-no"></img>
     
    </>
  );
}

export default App;


