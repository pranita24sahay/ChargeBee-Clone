import React from "react";
import "./App.css";
import Toolbar from './Toolbar';
import MainContent from './MainContent';
import Footer from './Footer'
import { BrowserRouter } from "react-router-dom";

function App() {
 return(
    <div className="App">
      <BrowserRouter >    
        <Toolbar />
        <MainContent />
      </BrowserRouter >
    </div>
 );
}

export default App;