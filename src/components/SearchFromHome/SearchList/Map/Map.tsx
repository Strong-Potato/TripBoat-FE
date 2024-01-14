import { useEffect, useState } from "react";

import styles from "./Map.module.scss";

import flagMarker from "@/assets/homeIcons/map/flag.svg";
import bigFlagMarker from "@/assets/homeIcons/map/flag_big.svg";
import homeMarker from "@/assets/homeIcons/map/house.svg";
import bigHomeMarker from "@/assets/homeIcons/map/house_big.svg";
import forkMarker from "@/assets/homeIcons/map/restaurant.svg";
import bigForkMarker from "@/assets/homeIcons/map/restaurant_big.svg";

import MapItems from "./MapItems/MapItems";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
}

function Map({ data, categoryChange }: PropsType) {
  const [currentpin, setCurrentPin] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [markers, setMarkers] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setPin(data: SearchItemType[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentMarkers: any[] = [];

    data.map((data, i) => {
      let image;
      let imageSize;
      let imageOption;
      if (i === currentpin) {
        image =
          data.category === "숙소"
            ? bigHomeMarker
            : data.category === "맛집"
              ? bigForkMarker
              : bigFlagMarker;
        imageSize = new window.kakao.maps.Size(44, 52);
        imageOption = { offset: new window.kakao.maps.Point(0, 0) };
      } else {
        image =
          data.category === "숙소"
            ? homeMarker
            : data.category === "맛집"
              ? forkMarker
              : flagMarker;
        imageSize = new window.kakao.maps.Size(32, 32);
        imageOption = { offset: new window.kakao.maps.Point(-6, -10) };
      }

      const markerImage = new window.kakao.maps.MarkerImage(
        image,
        imageSize,
        imageOption,
      );
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          data.location.latitude,
          data.location.longtitude,
        ),
        image: markerImage,
      });
      currentMarkers.push(marker);
    });
    setMarkers([...currentMarkers]);
  }

  useEffect(() => {
    const container = document.getElementById("map");

    // React.StrictMode로 인해 map이 두 번 중첩되어 겹치는 현상 방지
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    setMap(new window.kakao.maps.Map(container, options));
  }, [data]);

  useEffect(() => {
    if (map) {
      const bounds = new window.kakao.maps.LatLngBounds();
      setPin(data);
      data.map((data) => {
        bounds.extend(
          new window.kakao.maps.LatLng(
            data.location.latitude,
            data.location.longtitude,
          ),
        );
      });
      map.setBounds(bounds);
    }
  }, [map]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addPin(marker: any[]) {
    marker.map((marker) => {
      marker.setMap(map);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function removePin(marker: any[]) {
    marker.map((marker) => {
      marker.setMap(null);
    });
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    removePin(markers);
    setPin(data);
  }, [currentpin]);

  useEffect(() => {
    if (markers) {
      addPin(markers);
    }
  }, [markers]);

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map" />
      <div className={styles.slide}>
        <MapItems
          data={data}
          categoryChange={categoryChange}
          setCurrentPin={setCurrentPin}
        />
      </div>
    </div>
  );
}

export default Map;
