import { useEffect, useState } from "react";
import useCurrentLocation from "../../Libs/useCurrentPostion";
import useTmap from "../../Libs/useTmap";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.scss";
import Map from "./Map";

const { Tmapv2 } = window;

export default function Home() {
    const geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 1000 * 3600 * 24, // 24 hour
    };
    const { location: currentLocation, error: currentError } =
        useCurrentLocation(geolocationOptions);

    // function initTmap() {
    //     var map = new Tmapv2.Map("TMap", {
    //         center: new Tmapv2.LatLng(
    //             currentLocation.latitude,
    //             currentLocation.longitude
    //         ),
    //         zoom: 15,
    //     });
    // }
    // useEffect(() => {
    //     initTmap();
    //     //     const script = document.createElement("script");
    //     //     script.innerHTML = `
    //     //     function initTmap() {
    //     //         var map = new Tmapv2.Map("TMap", {
    //     //             center: new Tmapv2.LatLng(37.5376216,127.1496362),
    //     //             zoom:15
    //     //         });
    //     //     }
    //     //     initTmap();
    //     //     `;
    //     //     script.type = "text/javascript";
    //     //     document.head.appendChild(script);
    // });

    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <SearchBar />
            </div>
            {/* <Tmap /> */}
            {/* <div id="TMap" className={style.map_container}></div> */}
            <Map />
        </div>
    );
}
