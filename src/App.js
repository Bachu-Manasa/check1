import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminCard from './Components/AdminCard';
import Content from './Components/Content'
import Home from './Components/Home';
import Page from './Components/Page';
import {BrowserRouter as Router,Route, Routes, Link, Navigate} from 'react-router-dom';


function App() {
  return (
   <Router>
   <div className="App">
     
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/page" element={ <Page/> }/>
      
          </Routes>
   </div>
 </Router>

  );
}

export default App;
