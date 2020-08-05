import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
// import MapModal from "./MapModal.js";

const mapStyle = {
  width: "100%",
  height: "100%",
};

// this component ininitilze the google map onto our application
class GoogleMap extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: {},
    markerInfo: {},
    title: "name of event",
  };

  // funciton that allows user to click on marker a see discription
  markerClick = (props, marker, e) =>
    this.setState({
      markerInfo: props,
      activeMarker: marker,
      showInfoWindow: true,
    });

  // closes the marker window and sets the discription pop up back to false
  unClick = (prop) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyle}
          initialCenter={{
            lat: 35.782169,
            lng: -80.793457,
          }}
        >
          <Marker
            onClick={this.markerClick}
            // event discription here
            name={"name of menory"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfoWindow}
            unClick={this.unClick}
          >
            <div>
              <h4> {this.state.title} </h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBS2KsFMf2O7g8Te1eaCQGenQYNMFaB2go",
})(GoogleMap);

// export default GoogleApiWrapper((props) => ({
//   apiKey: props.apiKey,
// }))(GoogleMap);

// Class Component

// class GoogleMap extends React.Component  {
//     constructor(props) {
//         super(props);
//         this.state = {
//             locations: [
//                 {
//                     lat: {},
//                     lng: {}
//                 }
//                 // // First place we ever met in person
//                 // {
//                 //     lat: 35.357250,
//                 //     lng: -79.798050
//                 // },
//                 // // Mall where we spent some time together
//                 // {
//                 //     lat: 35.699140,
//                 //     lng: -79.798050
//                 // },
//                 // // Park we went to play soccer at
//                 // {
//                 //     lat: 35.355970,
//                 //     lng: -79.785600
//                 // },
//                 // // Place where we went and got ice cream
//                 // {
//                 //     lat: 35.300980,
//                 //     lng: -79.665070
//                 // },
//                 // // restaurant where we had our first date
//                 // {
//                 //     lat: 35.163420,
//                 //     lng: -79.422250
//                 // },
//                 // // Where we went and walked around during our first date
//                 // {
//                 //     lat: 35.174049,
//                 //     lng: -79.390198
//                 // },
//                 // // Where we watched our first movie together
//                 // {
//                 //     lat: 35.173740,
//                 //     lng: -79.421593
//                 // },
//                 // // Where you watched me play he guitar for the first time
//                 // {
//                 //     lat: 35.251560,
//                 //     lng: -80.737660
//                 // },
//                 // // Went to TJ-Max
//                 // {
//                 //     lat: 35.157890,
//                 //     lng: -79.420410
//                 // },
//                 // // Went to eat at Chili's
//                 // {
//                 //     lat: 35.167600,
//                 //     lng: -79.424570
//                 // },
//                 // // First time trying frozen yogurt
//                 // {
//                 //     lat: 35.171700,
//                 //     lng: -79.423200
//                 // }
//             ],
//         }
//     }

//     componentDidMount() {
//         this.setState.getMap()
//     }

// getMap = () => {
//     useEffect(() => {
//         axios
//         .get("localhost:5000/api/event/getMarker")
//         .then(res => {
//             console.log("Data from useEffect on Map.js file", res)
//             this.setState(res.data)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }, [])
// }

// locationFunction = () => {
//     return this.state.locations.map((location, index) => {
//         return <Marker key={index} id={index} position={{
//             lat: location.lat,
//             lng: location.lng
//         }} onClick={() => console.log("You clicked me!")} />
//     })
// }

// render() {
//     return (

//         <div style={{height: "100%", width: "100%"}}>
//             {/* <MapModal /> */}
//             <Map
//             google={this.props.google}
//             initialCenter={{lat: 35.782169, lng: -80.793457}}
//             zoom={6}
//             >
//             {this.locationFunction()}

//             </Map>

//         </div>

//         )
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyBS2KsFMf2O7g8Te1eaCQGenQYNMFaB2go"
// })(GoogleMap)
