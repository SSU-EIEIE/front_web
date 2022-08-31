import { useEffect, useState } from "react";
import { PATHS } from "../../App";
import Input from "../Input/Input";
import style from "./Search.module.scss";
export default function Search() {
    const [address, setAddress] = useState("");

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const enter = () => {
        if (address) {
            window.open(PATHS.searchStr + address, "_self");
        } else {
            console.log(address);
        }
    };

    function currentLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }

    useEffect(() => {
        currentLocation();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <div className={style.search_bar}>
                    <Input
                        placeHolder={"지도 검색"}
                        onChanged={setAddress}
                        enterPress={enter}
                    />
                </div>
            </div>
            <div className={style.list_container}>
                <ChargerContainer lat={lat} lon={lon} />
                <div className={style.record_title}>{"최근검색"}</div>
                {/* 검색기록 리스트 */}
            </div>
        </div>
    );
}

function ChargerContainer(props: { lat: number; lon: number }) {
    const search = () => {
        if (props.lat > 0 && props.lon > 0) {
            let str = props.lon + "&" + props.lat;
            window.open(PATHS.searchElec + str.toString(), "_self");
        } else {
            console.log(props.lon, props.lat);
        }
    };

    return (
        <div className={style.charger_container}>
            <div className={style.icon} />
            <div
                className={style.text}
                onClick={() => {
                    search();
                }}
            >
                {"가까운 충전소 찾기"}
            </div>
        </div>
    );
}
