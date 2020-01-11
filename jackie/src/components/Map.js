import React from "react"; 
import {Map, GoogleApiWrapper} from "google-maps-react";

class GoogleMap extends React.Component  {


render() {
    return (

        <div style={{height: "100%", width: "100%"}}> 
            <Map
            google={this.props.google}
            initialCenter={{lat: 35.782169, lng: -80.793457}}
            zoom={6}
            
            />  
              
        </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBS2KsFMf2O7g8Te1eaCQGenQYNMFaB2go"
})(GoogleMap)