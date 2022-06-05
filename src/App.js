import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Clothings from './components/Clothings';
import Paintings from './components/Paintings';
import Electronics from './components/Electronics';
import Details from './components/Details';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/clothing' element={<Clothings/>}></Route>
        <Route path='/painting' element={<Paintings/>}></Route>
        <Route path='/electronic' element={<Electronics/>}></Route>
        <Route path='/details' element={<Details/>}></Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
