"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { memo } from "react";
import Map, { Marker } from "react-map-gl";

import { MAP_DATA } from "@/constants/map";
import { env } from "@/env.mjs";

import styles from "./ContactUsMap.module.scss";

const MAP_HEIGHT = 400;

function ContactUsMap() {
  return (
    <div className={styles.wrapper}>
      <Map
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={MAP_DATA.initialView}
        style={{ height: MAP_HEIGHT }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {MAP_DATA.markers.map(({ id, ...props }) => (
          <Marker key={id} {...props} anchor="bottom" />
        ))}
      </Map>
    </div>
  );
}

export default memo(ContactUsMap);
