import axios from "axios";
import { useEffect, useState } from "react";
import { getLineString } from "../../Libs/api";
import Map from "../Home/Map";
import DetailSearchBar from "../SearchBar/DetailSearchBar";
import style from "./Detail.module.scss";

const { kakao } = window;

export default function Detail(props: any) {
    const [current, setCurrent] = useState("");
    const [placeName, setPlaceName] = useState("");
    const [fromLon, setFromLon] = useState<string | undefined>(undefined);
    const [fromLat, setFromLat] = useState<string | undefined>(undefined);
    const [toLon, setToLon] = useState<string | undefined>(undefined);
    const [toLat, setToLat] = useState<string | undefined>(undefined);

    const [pathArr, setpathArr] = useState([]);

    //lon : x
    //lat : y

    async function poiSearch(
        fromLon: string,
        fromLat: string,
        toLon: string,
        toLat: string
    ) {
        const response = await axios.get("users/poisearch", {
            params: {
                fromLon: fromLon,
                fromLat: fromLat,
                toLon: toLon,
                toLat: toLat,
                startName: "출발지",
                endName: "도착지",
            },
            baseURL: "http://18.207.245.34:3000",
        });

        return response;
    }

    useEffect(() => {
        let toLon = "";
        let toLat = "";

        if (props.match.params.searchString) {
            let str = props.match.params.searchString.replaceAll('"', "");
            setPlaceName(str.split("&")[0]);

            toLon = Number(str.split("&")[1]).toFixed(8);
            toLat = Number(str.split("&")[2]).toFixed(8);
            setToLon(toLon.toString());
            setToLat(toLat.toString());
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                setFromLon(lon.toString());
                setFromLat(lat.toString());

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

    useEffect(() => {
        if (fromLon && fromLat && toLon && toLat) {
            poiSearch(fromLon, fromLat, toLon, toLat)
                .then((r) => {
                    console.log(r);
                    getLineString(r.data.features)
                        .then((r) => {
                            setpathArr(r);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [toLat, toLon, fromLat, fromLon]);

    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <DetailSearchBar start={current} end={placeName} />
            </div>
            <Map latlng={pathArr} />
        </div>
    );
}
