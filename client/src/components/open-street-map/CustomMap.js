import React, { Component } from 'react';
import MyMarkersList from './MyMarkersList';
import {
  Map,
  TileLayer,
  // PropTypes as MapPropTypes
} from 'react-leaflet';

export default class CustomMap extends Component {
  state = {
    zoom: 12
  };
  componentDidMount() {
    this.setState({
      markers: this.props.markers
    });
  }
  render() {
    return (
      <Map
        className=""
        center={this.props.center}
        zoom={this.state.zoom}
        ref={this.mapRef}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         <MyMarkersList
          markers={this.props.markers}
        />
      </Map>
    );
  }
}

//   const {profile} = this.props;
//     // this part to center our Map and get lat and lng of the item location
//     var markers = [];
//           let geolocation='53.3763635,13.445424424'
//           let lnglat = geolocation.lnglat.split(',');
//           markers.push({
//             key: profile._id,
//             id: profile._id,
//             position: [Number(lnglat[0]), Number(lnglat[1])],
//             children: profile.name,
//             imageUrl: 'redMarker.png',
//             location: profile.location
//           });
//         });
//      this.setState({
//           markers: markers,
//           center: markers[0].position,
//         });
