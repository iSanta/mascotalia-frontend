"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import useLocation from "@/Application/geo-location/useLocation";
import useLostPet from "@/Application/lost-pet/useLostPet";
import { Coordinates } from "@/Domain/geolocation/Types";

type LostPetLocation = {
  latitude: number;
  longitude: number;
};

function LocationMarker() {
  const { setLostPetLocation } = useLostPet();
  const [position, setPosition] = useState<LostPetLocation | null>(null);
  const map = useMapEvents({
    click(e) {
      const coordinates = {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      } as LostPetLocation;

      setPosition(coordinates);

      setLostPetLocation(coordinates);
    },
  });

  return position === null ? null : (
    <Marker position={[position.latitude, position.longitude]}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Mapa = ({ latitude, longitude }: Coordinates) => {
  const coordinatesInitialized: boolean = latitude && longitude ? true : false;
  const { getCoordinates } = useLocation();
  const { getLostPetLocation, setLostPetLocation } = useLostPet();
  const [userLocationCoordinates, setUserLocationCoordinates] = useState<Coordinates>(coordinatesInitialized ? { latitude, longitude } : null);

  console.log(getLostPetLocation())

  useEffect(() => {
    if (coordinatesInitialized) return;
    (async () => {
      setUserLocationCoordinates((await getCoordinates()).coords);
    })();

    return () => {
      setUserLocationCoordinates(null);
      setLostPetLocation({ latitude: 0, longitude: 0 });
    }

  }, []);



  if (!userLocationCoordinates) {
    return <></>;
  }

  return (
    <MapContainer
      center={[userLocationCoordinates.latitude, userLocationCoordinates.longitude]}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {getLostPetLocation().latitude !== 0 && getLostPetLocation().longitude !== 0 &&
        (
          <Circle
            center={coordinatesInitialized ? [userLocationCoordinates.latitude, userLocationCoordinates.longitude] : [getLostPetLocation().latitude, getLostPetLocation().longitude]}
            radius={300}
            color="blue"
            fillColor="blue"
            fillOpacity={0.3}
          />
        )}
      {!coordinatesInitialized && <LocationMarker />}
    </MapContainer>
  );
};

export default Mapa;
