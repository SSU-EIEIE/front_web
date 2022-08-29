import { useEffect, useState } from "react";
import style from "./DetailSearchBar.module.scss";

const { kakao } = window;
export default function DetailSearchBar(props: { end: string }) {
    const [current, setCurrent] = useState("");
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var geocoder = new kakao.maps.services.Geocoder();

                let coord = new kakao.maps.LatLng(lat, lon);
                let callback = function (result: any, status: any) {
                    if (status === kakao.maps.services.Status.OK) {
                        setCurrent(result[0].address.address_name);
                    }
                };
                geocoder.coord2Address(
                    coord.getLng(),
                    coord.getLat(),
                    callback
                );
            });
        }
    }, []);
    return (
        <div className={style.container}>
            <div className={style.start_container}>
                <div className={style.text}>
                    {current ? current : "내 현재위치"}
                </div>
            </div>
            <div className={style.change_btn} />
            <div className={style.end_container}>
                <div className={style.text}>
                    {props.end.replaceAll('"', "")}
                </div>
            </div>
        </div>
    );
}
