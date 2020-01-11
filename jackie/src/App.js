import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GoogleMap from "./components/Map.js"; 
import MakeMemories from "./components/MakeMemories.js"; 
import SheSaidYes from "./components/SheSaidYes.js"

function App() {
  return (
    <div className="App">
     <Router> 
     <h2> Dear Jackie </h2> 
     <div style={{marginBottom: "10px"}}> 
     <Link to="/makememories"> <div style={{textDecoration: "none", color: "black"}}> Make More Memories </div> </Link>
    </div>
     <Route exact path="/" render={props => (
        <GoogleMap {...props} /> 
      )} />

    <Route path="/makememories" component={MakeMemories} />
    <Route path="/shesaidyes" component={SheSaidYes} />
      </Router>
      
     {/* <GoogleMap/>  */}
    </div>
  );
}

export default App;
