"use client";

import { useEffect, useState } from "react";
import { Loader, LoaderOptions } from "google-maps";
import { googleMapsApiKey } from "../secrets";

export default function Map() {
  const [message, setMessage] = useState("hydrating...");
  useEffect(() => {
    console.log("*** map mounted an hydrated?");
    const mapEl = document.getElementById("map");
    console.log("** msp ", mapEl);

    const loadMap = async () => {
      const options: LoaderOptions = {
        /* todo */
      };
      const loader = new Loader(googleMapsApiKey, options);
      const google = await loader.load();
      console.log("* in load map")
      if (mapEl) {
        const map = new google.maps.Map(mapEl);
        console.log("***** map el foudn ", map)
        map.setCenter({
          lat: -34.397,
          lng: 150.644,
        });
      }else{
        console.log("**** map el not foudn")
      }
    };
    setMessage("HYDRATED");
    loadMap();
  }, []);

  return <div>{message}</div>;
}
