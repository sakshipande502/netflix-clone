import React from 'react';
import {BrowserRouter,Switch,Route,Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Netflixshow from './pages/Netflixshow';
import Footer from './components2/Footer/Footer';
import ScrollToTops from './components2/ScrollToTop/ScrollToTops';
function App() {
  return (
    
    <BrowserRouter>
    <div className='App'>
    <ScrollToTops></ScrollToTops>
     <Routes>
     {/* <Switch> */}

    
       <Route path='/' element={<Home/>}/>
       <Route path='/show' element={<Netflixshow/>}/>
       {/* </Switch> */}
     </Routes>

    <Footer></Footer>
    
    {/* <Home></Home>
    <Netflixshow></Netflixshow> */}
    </div>
    
    </BrowserRouter>
    
 
 
  );
}

export default App;
