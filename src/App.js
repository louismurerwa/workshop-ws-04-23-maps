import React, { Component } from 'react';
import { InfoWindow, Marker,Map, GoogleApiWrapper,Polygon } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }; 
}

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

    const triangleCoords = [
      {lat: 43.7046, lng: -72.2943}, 
      {lat: 43.7034, lng: -72.2886}, 
      {lat: 43.7091, lng: -72.2839}, 
      {lat: 43.7046, lng: -72.2943} 
    ];
    
    return (
      <div>
        
        <h1>Hello Google Maps</h1>
        <Map google={this.props.google}
        initialCenter={{
          lat: 43.7034,
          lng: -72.2886
        }}
        zoom={10}
        > 
          <Marker
    name={'The Green of Greenss!'}
    position={{lat:43.7034, lng: -72.2886}}
    onClick={this.onMarkerClick}

/>
<InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
      >
<div>
    <h2>{this.state.selectedPlace.name}</h2>
</div>
</InfoWindow>
<Polygon
    paths={triangleCoords}
    strokeColor="#0000FF"
    strokeOpacity={0.8}
    strokeWeight={2}
    fillColor="#0000FF"
    fillOpacity={0.35} 
/>
      </Map>
      
      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDMw5bYBh5br98grTdy27GbwJMBIZkQQpE'
})(MapContainer);