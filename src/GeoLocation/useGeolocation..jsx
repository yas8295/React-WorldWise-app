import { useState } from "react";

function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [loadPosition, setLoadPosition] = useState(false);

  function getPosition() {
    setLoadPosition(true);
    navigator.geolocation.getCurrentPosition((pos) =>
      setCurrentPosition([pos.coords.latitude, pos.coords.longitude])
    );
    setTimeout(function () {
      setLoadPosition(false);
    }, 2000);
  }

  return { currentPosition, loadPosition, getPosition };
}

export { useGeolocation };
