import './App.css';
import Home from '../Home/Home';
import Recipes from './../Recipes/Recipes';
import Testymonials from './../Testymonials/Testymonials';
import Contactus from '../Contactus/Contactus';
import { ToastContainer } from 'react-toastify';
import How from '../How/How';
import About from './../About/About';
function App() {
  return (
    <>
      <ToastContainer theme='light'
      autoClose={1000}
      style={{ marginTop:50 }}/>
    <Home/>
    <How/>
    <About/>
    <Recipes/>
    <Testymonials/>
    <Contactus/>
    </>
  );
}

export default App;
