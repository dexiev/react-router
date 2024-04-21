import './App.css';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import Navbar from './Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/menu' element = {<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;