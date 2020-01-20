import React, {useEffect} from "react"; 
import {Map, GoogleApiWrapper, Marker} from "google-maps-react"; 
import NavBar from "./NavBar.js"; 
// import axios from "axios"; 

class GoogleMap extends React.Component  {
    constructor(props) {
        super(props); 
        this.state = {
            locations: [
                // First place we ever met in person
                {
                    lat: 35.357250,
                    lng: -79.798050 
                },
                // Mall where we spent some time together
                {
                    lat: 35.699140, 
                    lng: -79.798050
                },
                // Park we went to play soccer at 
                {
                    lat: 35.355970, 
                    lng: -79.785600
                }, 
                // Place where we went and got ice cream
                {
                    lat: 35.300980,
                    lng: -79.665070
                },
                // restaurant where we had our first date
                {
                    lat: 35.163420,
                    lng: -79.422250
                },
                // Where we went and walked around during our first date
                {
                    lat: 35.174049,
                    lng: -79.390198
                },
                // Where we watched our first movie together
                {
                    lat: 35.173740,
                    lng: -79.421593
                },
                // Where you watched me play he guitar for the first time
                {
                    lat: 35.251560,
                    lng: -80.737660
                }, 
                // Went to TJ-Max 
                {
                    lat: 35.157890,
                    lng: -79.420410
                },
                // Went to eat at Chili's
                {
                    lat: 35.167600,
                    lng: -79.424570
                },
                // First time trying frozen yogurt
                {
                    lat: 35.171700,
                    lng: -79.423200
                } 
            ],
        }
    }

// Set up once I get data base running
    // componentDidMount() {
        
    // }

    // getMarker = () => {
    //     useEffect(() => {
    //         axios
    //         .get()
            
    //     }, [])
    // }
// Set up once I get data base running


    locationFunction = () => {
        return this.state.locations.map((location, index) => {
            return <Marker key={index} id={index} position={{
                lat: location.lat,
                lng: location.lng
            }} onClick={() => console.log("You clicked me!")} />
        })
    }


render() {
    return (

        <div style={{height: "100%", width: "100%"}}> 
            <NavBar />
            <Map
            google={this.props.google}
            initialCenter={{lat: 35.782169, lng: -80.793457}}
            zoom={6}
            >  
            {this.locationFunction()}
            
            </Map>
              
        </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBS2KsFMf2O7g8Te1eaCQGenQYNMFaB2go"
})(GoogleMap)