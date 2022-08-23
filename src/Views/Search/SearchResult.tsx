import { useEffect, useState } from "react";
import { PATHS } from "../../App";
import Input from "../Input/Input";
import style from "./Search.module.scss";

const { kakao } = window;

export default function SearchResult(props: any) {
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
        var ps = new kakao.maps.services.Places();
        ps.keywordSearch(props.match.params.searchString, placesSearchCB);
    }, []);

    function placesSearchCB(data: any, status: any, pagination: any) {
        if (status === kakao.maps.services.Status.OK) {
            setData(data);
            console.log(data);
            console.log(status);
            console.log(pagination);
        }
    }

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
                {data ? (
                    data.map((item: any) => {
                        return (
                            <div>
                                <div>{JSON.stringify(item.place_name)}</div>
                                <div>
                                    {JSON.stringify(item.road_address_name)}
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
