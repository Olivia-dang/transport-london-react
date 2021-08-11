import React, { Component } from "react";
import { GGMAP_KEY } from "../../api/auth";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div className="map">
        <h2 className="map-h2">Visit The Bike Station at {this.props.location.commonName}</h2>
        <div className="google-map">
          <Map
            google={this.props.google}
            zoom={14}
            // style={mapStyles}
            initialCenter={{
              lat: this.props.location.lat,
              lng: this.props.location.lon,
            }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={`${this.props.location.commonName}`}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
            
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${GGMAP_KEY}`,
})(MapContainer);
