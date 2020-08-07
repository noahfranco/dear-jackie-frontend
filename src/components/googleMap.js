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
