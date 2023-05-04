import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
      <nav className="App">
        <a href="#" className="nav-item">Homepage</a>
        
      </nav>
    
    
    <Homepage/>
    <Navbar/>
    <Bookingpage/>
    <Login/>
    <Footer/>
    
    </div>

    
  );
}
export default App;



