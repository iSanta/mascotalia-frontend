"use client";
import dynamic from "next/dynamic";
import React, { JSX } from "react";

const LeafletMap = dynamic(() => import("@/Presentation/Map/Leaflet/LeafletMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const MapProvier = ({ latitude, longitude }: { latitude?: number, longitude?: number }): JSX.Element => {
  switch (process.env.NEXT_PUBLIC_MAP_PROVIDER) {
    case "leaflet":
      return <LeafletMap latitude={latitude} longitude={longitude} />;

    default:
      return <LeafletMap />;
  }
};

export default MapProvier;
