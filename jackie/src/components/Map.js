import React from "react"; 
import {Map, GoogleApiWrapper} from "google-maps-react";

class GoogleMap extends React.Component  {
    static latAndLong = {
        location: {
            latitude: 35.1954, 
            longitude: 79.4695
        }
    }

render() {
    return (

        <div style={{height: "100vh", width: "100%"}}> 
            <Map
            google={this.props.location}
            > 


            </Map>

        </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ""
})(GoogleMap)