import { CustomOverlayMap, Map, Polyline } from "react-kakao-maps-sdk";

import styles from "./MapInTrip.module.scss";

import Marker1 from "@/assets/tripIcons/marker1.svg?react";
import Marker2 from "@/assets/tripIcons/marker2.svg?react";
import Marker3 from "@/assets/tripIcons/marker3.svg?react";

function MapInTrip() {
  const linePath = [
    { lat: 37.76437082535426, lng: 128.87675285339355 },
    { lat: 37.7911054, lng: 128.9149116 },
    { lat: 37.6964635, lng: 128.890664 },
  ];

  return (
    <>
      <Map
        className={styles.mapInTripContainer}
        center={{ lat: linePath[0].lat, lng: linePath[0].lng }}
        level={10}
      >
        <Polyline
          path={linePath}
          strokeWeight={3}
          strokeColor="#3F444D"
          strokeOpacity={1}
          strokeStyle="longdash"
        />
        <CustomOverlayMap position={linePath[0]}>
          <Marker1 />
        </CustomOverlayMap>
        <CustomOverlayMap position={linePath[1]}>
          <Marker2 />
        </CustomOverlayMap>
        <CustomOverlayMap position={linePath[2]}>
          <Marker3 />
        </CustomOverlayMap>
      </Map>
    </>
  );
}

export default MapInTrip;
