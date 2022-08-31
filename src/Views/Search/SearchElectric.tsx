import axios from "axios";
import { useEffect, useState } from "react";
import { PATHS } from "../../App";
import Input from "../Input/Input";
import style from "./Search.module.scss";

const { kakao } = window;

export default function SearchElectric(props: any) {
    const [address, setAddress] = useState("");
    const [data, setData] = useState<any>("");

    const enter = () => {
        if (address) {
            window.open(PATHS.searchStr + address, "_self");
        } else {
            console.log(address);
        }
    };

    useEffect(() => {
        console.log(props.match.params.searchString);
        let lon = props.match.params.searchString.split("&")[0];
        let lat = props.match.params.searchString.split("&")[1];
        electricSearch(lon, lat)
            .then((r) => {
                console.log(r.data.response.body.items);
                setData(r.data.response.body.items);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [props]);

    async function electricSearch(lon: string, lat: string) {
        const response = await axios.get("users/electric", {
            params: {
                lon: lon,
                lat: lat,
            },
            baseURL: "http://18.207.245.34:3000",
        });

        return response;
    }

    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <div className={style.search_bar}>
                    <Input
                        placeHolder={"지도 검색"}
                        onChanged={setAddress}
                        enterPress={enter}
                        text={"가까운 충전소"}
                    />
                </div>
            </div>
            <div className={style.list_container}>
                {data ? (
                    data.map((item: any) => {
                        return (
                            <div
                                className={style.list_item}
                                onClick={() => {
                                    window.open(
                                        PATHS.detail +
                                            JSON.stringify(item.fcltyNm) +
                                            "&" +
                                            JSON.stringify(item.longitude) +
                                            "&" +
                                            JSON.stringify(item.latitude),
                                        "_self"
                                    );
                                }}
                            >
                                <div className={style.place_name}>
                                    {JSON.stringify(item.fcltyNm).replaceAll(
                                        '"',
                                        ""
                                    )}
                                </div>
                                <div className={style.place_address}>
                                    {JSON.stringify(item.rdnmadr).replaceAll(
                                        '"',
                                        ""
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
}
