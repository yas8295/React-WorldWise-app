import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Contexts } from "../Context/Context";
import { useGeolocation } from "../GeoLocation/useGeolocation.";

export default function Map() {
  const { cities, user, dispatch } = useContext(Contexts);
  const [searchParams] = useSearchParams();
  const [position, setPosition] = useState([30, 30]);
  const { currentPosition, loadPosition, getPosition } = useGeolocation();
  const navigate = useNavigate();

  function getCurrentPosition() {
    getPosition();
  }

  function logout() {
    dispatch({ type: "logout" });
    navigate("/login");
  }

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(
    function () {
      if (!lat && !lng) return;
      setPosition([lat, lng]);
    },
    [lat, lng]
  );

  return (
    <div className="h-100 w-100 position-relative">
      <MapContainer
        className="h-100 w-100"
        style={{ zIndex: "0" }}
        center={currentPosition || position}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.notes || "add notes"}</Popup>
          </Marker>
        ))}
        <MoveMap position={position}></MoveMap>
        <AddCity></AddCity>
      </MapContainer>
      {currentPosition ? null : (
        <button
          onClick={getCurrentPosition}
          className="p-3 px-4 position-absolute"
          style={{
            fontSize: "14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "rgb(21 173 56)",
            color: "white",
            zIndex: "1",
            bottom: "20px",
            left: "50%",
            translate: "-50%",
          }}
        >
          {loadPosition ? "Loading..." : "USE YOUR POSITIOIN"}
        </button>
      )}
      <div
        className="d-flex gap-4 px-4 py-3 align-items-center position-absolute"
        style={{
          top: "10px",
          right: "10px",
          backgroundColor: "#42484d",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ fontSize: "15px" }}>
          Welcome, {user ? user.name.toUpperCase() : null}
        </h1>
        <button
          onClick={(e) => logout()}
          className="button-28 p-3 px-4"
          style={{ height: "fit-content", fontSize: "13px", fontWeight: "600" }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

function MoveMap({ position }) {
  const map = useMap();
  map.flyTo(position, 6);
}

function AddCity() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
