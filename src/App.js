import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMap from "./components/Map.js"; 
import MakeMemories from "./components/MakeMemories.js"; 
import SheSaidYes from "./components/SheSaidYes.js"
import NavBar from "./components/NavBar.js"; 
import MapComponent from "./components/Map.js"; 

function App() {
  return (
    <>
    <NavBar />
    <div>
     <Router> 
     <Route exact path="/" render={props => (
        <GoogleMap {...props} /> 
      )} />

    <Route path="/makememories" component={MakeMemories} />
    <Route path="/shesaidyes" component={SheSaidYes} />
    <Route path="/map" component={MapComponent} />
      </Router>
      
     {/* <GoogleMap/>  */}
    </div>
    </>
  );
}

export default App;
