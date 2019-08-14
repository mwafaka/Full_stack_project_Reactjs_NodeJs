import React from "react";
import { Marker, CircleMarker, Popup } from "react-leaflet";
import L from "leaflet";

const MyPopupMarker = ({
  children,
  position,

  id,
  imageUrl,
  location
}) => (
  <div>
    />
    <CircleMarker
      title={children}
      center={position}
      color="blue"
      radius={20}
      opacity={0.5}
    />
    <Marker
      position={position}
      color="red"
      icon={L.icon({
        iconUrl: "leaf-green.png",
        shadowUrl: "leaf-shadow.png",

        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      })}
      // {L.icon({
      //   iconUrl: "/images/redMarker.png",
      //   iconSize: [80, 80],
      //   iconAnchor: [40, 80],
      //   shadowUrl: null,
      //   shadowSize: null,
      //   shadowAnchor: null
      // })}
    >
      <Popup>
        <div className="row p-0 justify-content-center">
          <h5 className="p-0 m-0">{children}</h5>
          <p>{location}</p>
          <img
            src={"/images/" + imageUrl}
            width="70px"
            height="70px"
            alt=""
            className="image-fit"
          />
        </div>
      </Popup>
    </Marker>
  </div>
);

export default MyPopupMarker;
