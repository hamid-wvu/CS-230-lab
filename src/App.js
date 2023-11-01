import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar title="ReactApp" />  
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/Card" element={<Card />} />
                <Route path ="/Contact" element={<Contact />} />
            </Routes>
            
          </BrowserRouter>
          
    </div>
  );
}

export default App;
