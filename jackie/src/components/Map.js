import React from "react"; 
import {Map, GoogleApiWrapper} from "google-maps-react";

class GoogleMap extends React.Component  {
    static latAndLong = {
        location: {
            latitude: 35.1954, 
            longitude: 79.4695
        },
        vision: {
            zoom: 11
        }
    }



render() {
    return (

        <div style={{height: "100%", width: "100%"}}> 
            <Map
            google={this.props.location}
            vision={this.props.zoom}
            > 


            </Map>

        </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBS2KsFMf2O7g8Te1eaCQGenQYNMFaB2go"
})(GoogleMap)