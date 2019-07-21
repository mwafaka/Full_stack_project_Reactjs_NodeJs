import React, { Component } from "react";
import CustomMap from "../open-street-map/CustomMap";

export default class Map extends Component {
  state = {
    center: [52.123123, 13.566567]
  };
  componentDidMount() {
    const { profile } = this.props;
    window.scrollTo(0, 0);
    console.log(profile);
    if (profile) {
      let markers = [];
      let latlng = profile.latlng.split(",");
      markers.push({
        key: profile._id,
        id: profile._id,
        position: [Number(latlng[0]), Number(latlng[1])],
        children: profile.company,
        imageUrl: "redMarker.png",
        location: profile.location
      });

      this.setState({
        markers: markers,
        center: markers[0].position
      });
    }
  }

  render() {
    return (
      <div className="profile-to">
        <div className="row col-12">
          <CustomMap markers={this.state.markers} center={this.state.center} />
        </div>
      </div>
    );
  }
}
