//import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import NavMenu from './components/AnimatedNavMenu1/NavMenu';
import InputLabel from './components/cssInputLabelAnimation/InputLabel';
import MainNav from './components/MainNav/MainNav';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <MainNav/>
      <Routes>
        <Route path='/' element={<h1>hhhe</h1>}/>
        <Route path="/animatdnavmenu1" element={<NavMenu/>}/>
        <Route path="/inputlabelanimation" element={<InputLabel/>}/>
        
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
